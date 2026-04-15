import { z } from 'zod'

/** ========================= ENUMS ========================= */

export const sessionSourceProviderSchema = z.enum(['racemann', 'manual', 'mixed'])

export const sessionSourceCompletenessSchema = z.enum([
  'full',
  'official_only',
  'partial',
  'manual_only',
])

export const sessionTypeSchema = z.enum([
  'race',
  'qualification',
  'training',
  'time_attack',
  'rental',
  'unknown',
])

export const effectiveRaceStatusSchema = z.enum([
  'race',
  'qualification',
  'time_attack',
  'training',
  'rental',
  'unknown',
])

export const sessionStatusSchema = z.enum([
  'draft',
  'scheduled',
  'live',
  'finished',
  'cancelled',
  'archived',
])

export const sessionFormatLimitTypeSchema = z.enum([
  'time',
  'laps',
  'time_and_laps',
  'open',
  'unknown',
])

export const participantDisplayNameSourceSchema = z.enum([
  'race_participant_name',
  'student_name',
  'kart_fallback',
  'reg_number_fallback',
  'manual',
])

export const studentMappingStatusSchema = z.enum([
  'mapped',
  'unmapped',
  'ambiguous',
  'manual',
])

export const participantOfficialStatusSchema = z.enum([
  'finished',
  'dsq',
  'dnf',
  'dns',
  'unknown',
])

export const pilotScoreGradeSchema = z.enum(['A', 'B', 'C', 'D', 'E'])

export const pilotScoreExplainFlagSchema = z.enum([
  'podium_finish',
  'front_running_pace',
  'best_clean_pace',
  'warnings_present',
  'penalties_present',
  'many_warning_laps',
  'disqualified',
])

/** ========================= SMALL REUSABLE SCHEMAS ========================= */

export const msSchema = z.number().int().nonnegative()
export const nullableMsSchema = msSchema.nullable()
export const nullableIntSchema = z.number().int().nullable()

export const rangeSchema = z.tuple([z.number().int(), z.number().int()])

export const sourceInputsSchema = z.object({
  raceStartDataApi: z.boolean(),
  resultExport: z.boolean(),
  lapByLapExport: z.boolean(),
  manualAttachments: z.boolean(),
})

export const sourceCoverageSchema = z.object({
  raceStartDataApi: z.boolean(),
  resultExport: z.boolean(),
  lapByLapExport: z.boolean(),
})

export const gapSchema = z.object({
  laps: nullableIntSchema,
  ms: nullableMsSchema,
})

/** ========================= SESSION ========================= */

export const sessionSourceSchema = z.object({
  provider: sessionSourceProviderSchema,
  completeness: sessionSourceCompletenessSchema,
  inputs: sourceInputsSchema,
})

export const trackConfigurationSchema = z.object({
  id: z.string().nullable(),
  name: z.string().nullable(),
})

export const trackSchema = z.object({
  externalId: z.string().nullable(),
  name: z.string().nullable(),
  trackRacemannLink: z.string().nullable(),
  configuration: trackConfigurationSchema,
})

export const sessionFormatSchema = z.object({
  limitType: sessionFormatLimitTypeSchema,
  scheduledTimeMs: nullableMsSchema,
  scheduledLaps: nullableIntSchema,
  actualLapsComplete: nullableIntSchema,
})

export const sessionBlockSchema = z.object({
  id: z.string(),
  source: sessionSourceSchema,
  externalRaceId: z.string(),
  externalNumericRaceId: z.number().int(),
  name: z.string(),
  displayName: z.string(),
  championshipCode: z.string().nullable(),
  type: sessionTypeSchema,
  effectiveRaceStatus: effectiveRaceStatusSchema,
  status: sessionStatusSchema,
  startedAt: z.string().datetime({ offset: true }),
  endedAt: z.string().datetime({ offset: true }).nullable(),
  track: trackSchema,
  format: sessionFormatSchema,
})

/** ========================= OVERVIEW ========================= */

export const overviewParticipantRefSchema = z.object({
  participantId: z.string(),
  regNumber: z.string(),
  displayName: z.string(),
})

export const overviewBestMetricSchema = z.object({
  participantId: z.string(),
  regNumber: z.string(),
  displayName: z.string(),
  valueMs: nullableMsSchema,
})

export const overviewEventsSchema = z.object({
  warningCount: z.number().int().nonnegative(),
  penaltyCount: z.number().int().nonnegative(),
  infoCount: z.number().int().nonnegative(),
})

export const overviewLapsSchema = z.object({
  warningLapCount: z.number().int().nonnegative(),
  pitLapCount: z.number().int().nonnegative(),
  longLapCount: z.number().int().nonnegative(),
})

export const overviewBlockSchema = z.object({
  participantsCount: z.number().int().nonnegative(),
  mappedParticipantsCount: z.number().int().nonnegative(),
  unmappedParticipantsCount: z.number().int().nonnegative(),
  winner: overviewParticipantRefSchema,
  bestLap: overviewBestMetricSchema,
  bestCleanAvgLap: overviewBestMetricSchema,
  events: overviewEventsSchema,
  laps: overviewLapsSchema,
})

/** ========================= TABLE ========================= */

export const participantIdentityStudentSchema = z.object({
  studentId: z.string().nullable(),
  name: z.string().nullable(),
  mappingStatus: studentMappingStatusSchema,
})

export const participantIdentityDisplayNameSchema = z.object({
  value: z.string(),
  source: participantDisplayNameSourceSchema,
})

export const participantIdentitySchema = z.object({
  regNumber: z.string(),
  displayName: participantIdentityDisplayNameSchema,
  student: participantIdentityStudentSchema,
})

export const participantClassificationSchema = z.object({
  officialStatus: participantOfficialStatusSchema,
  position: nullableIntSchema,
  officialLapsCount: nullableIntSchema,
  realLapsCount: nullableIntSchema,
  officialTotalTimeMs: nullableMsSchema,
  officialRealTotalTimeMs: nullableMsSchema,
  timePenaltyMs: z.number().int(),
  virtualLapDelta: z.number().int(),
  gapToPrevious: gapSchema,
  gapToLeader: gapSchema,
})

export const participantKartsSchema = z.object({
  stintsCount: z.number().int().nonnegative(),
  kartNumbers: z.array(z.string()),
})

export const participantPaceSchema = z.object({
  bestLapMs: nullableMsSchema,
  avgLapMs: nullableMsSchema,
  best3AvgLapMs: nullableMsSchema,
  medianLapMs: nullableMsSchema,
  cleanAvgLapMs: nullableMsSchema,
  gapToBestLapMs: nullableMsSchema,
})

export const participantConsistencySchema = z.object({
  validLapsCount: nullableIntSchema,
  warningLapCount: z.number().int().nonnegative(),
  value: z.number().nullable(),
})

export const participantPitSchema = z.object({
  pitCount: z.number().int().nonnegative(),
})

export const participantIncidentsSchema = z.object({
  warningEventsCount: z.number().int().nonnegative(),
  penaltyEventsCount: z.number().int().nonnegative(),
})

export const pilotScoreComponentsSchema = z.object({
  resultScore: z.number(),
  paceScore: z.number(),
  consistencyScore: z.number(),
  disciplineScore: z.number(),
  sampleQualityScore: z.number(),
})

export const pilotScoreExplainSchema = z.object({
  flags: z.array(pilotScoreExplainFlagSchema),
})

export const pilotScoreSchema = z.object({
  total: z.number(),
  grade: pilotScoreGradeSchema,
  modelId: z.string(),
  components: pilotScoreComponentsSchema,
  explain: pilotScoreExplainSchema,
})

export const participantRowSchema = z.object({
  participantId: z.string(),
  identity: participantIdentitySchema,
  classification: participantClassificationSchema,
  karts: participantKartsSchema,
  pace: participantPaceSchema,
  consistency: participantConsistencySchema,
  pit: participantPitSchema,
  incidents: participantIncidentsSchema,
  pilotScore: pilotScoreSchema,
})

/** ========================= META ========================= */

export const consistencyModelSchema = z.object({
  id: z.string(),
  range: rangeSchema,
  notes: z.array(z.string()),
})

export const pilotScoreModelWeightsSchema = z.object({
  resultScore: z.number(),
  paceScore: z.number(),
  consistencyScore: z.number(),
  disciplineScore: z.number(),
  sampleQualityScore: z.number(),
})

export const pilotScoreModelHardRulesSchema = z.object({
  dsqScoreCap: z.number().int(),
})

export const pilotScoreModelSchema = z.object({
  id: z.string(),
  range: rangeSchema,
  weights: pilotScoreModelWeightsSchema,
  hardRules: pilotScoreModelHardRulesSchema,
  notes: z.array(z.string()),
})

export const metaBlockSchema = z.object({
  calculationVersion: z.string(),
  sourceCoverage: sourceCoverageSchema,
  consistencyModel: consistencyModelSchema,
  pilotScoreModel: pilotScoreModelSchema,
})

/** ========================= ROOT ========================= */

export const sessionDetailsResponseSchema = z.object({
  session: sessionBlockSchema,
  overview: overviewBlockSchema,
  table: z.array(participantRowSchema),
  meta: metaBlockSchema,
})



/** ========================= LIST ENUMS ========================= */

export const sessionListStatusSchema = z.enum([
  'draft',
  'in_progress',
  'finished',
  'cancelled',
])

export const sessionListTypeSchema = z.enum([
  'race',
  'qualification',
  'practice',
  'time_attack',
  'rental',
])

export const sessionListEffectiveRaceStatusSchema = z.enum([
  'race',
  'training',
  'time_attack',
  'rental',
])

export const sessionListSourceCompletenessSchema = z.enum([
  'full',
  'partial',
  'api_only',
  'manual_only',
])

export const sessionListFormatLimitTypeSchema = z.enum(['time', 'laps'])

export const sessionListMappingStatusSchema = z.enum([
  'unmapped',
  'partial',
  'complete',
])

export const sessionListSortFieldSchema = z.enum([
  'startedAt',
  'endedAt',
  'name',
  'status',
  'type',
  'participantsCount',
])

export const sortDirectionSchema = z.enum(['asc', 'desc'])

/** ========================= LIST FILTERS / PARAMS ========================= */

export const sessionsListQuerySchema = z.object({
  page: z.number().int().min(1).default(1),
  pageSize: z.number().int().min(1).default(20),

  search: z.string().trim().optional(),

  type: sessionListTypeSchema.optional(),
  effectiveRaceStatus: sessionListEffectiveRaceStatusSchema.optional(),
  status: sessionListStatusSchema.optional(),
  championshipCode: z.string().trim().optional(),
  trackExternalId: z.string().trim().optional(),
  trackConfigurationId: z.string().trim().optional(),
  sourceProvider: sessionSourceProviderSchema.optional(),
  sourceCompleteness: sessionListSourceCompletenessSchema.optional(),
  mappingStatus: sessionListMappingStatusSchema.optional(),
  startedFrom: z.string().datetime({ offset: true }).optional(),
  startedTo: z.string().datetime({ offset: true }).optional(),

  sortField: sessionListSortFieldSchema.default('startedAt'),
  sortDirection: sortDirectionSchema.default('desc'),
})

/** ========================= LIST ITEM ========================= */

export const sessionListTrackConfigurationSchema = z.object({
  id: z.string().nullable(),
  name: z.string().nullable(),
})

export const sessionListTrackSchema = z.object({
  externalId: z.string().nullable(),
  name: z.string().nullable(),
  trackRacemannLink: z.string().nullable(),
  configuration: sessionListTrackConfigurationSchema,
})

export const sessionListSourceSchema = z.object({
  provider: sessionSourceProviderSchema,
  completeness: sessionListSourceCompletenessSchema,
})

export const sessionListFormatSchema = z.object({
  limitType: sessionListFormatLimitTypeSchema,
  scheduledTimeMs: nullableMsSchema,
  scheduledLaps: nullableIntSchema,
  actualLapsComplete: nullableIntSchema,
})

export const sessionListParticipantsSchema = z.object({
  totalCount: z.number().int().nonnegative(),
  mappedCount: z.number().int().nonnegative(),
  unmappedCount: z.number().int().nonnegative(),
  mappingStatus: sessionListMappingStatusSchema,
})

export const sessionListItemSchema = z.object({
  id: z.string(),
  externalRaceId: z.string().nullable(),
  externalNumericRaceId: z.number().int().nullable(),
  name: z.string(),
  displayName: z.string(),
  championshipCode: z.string().nullable(),
  type: sessionListTypeSchema,
  effectiveRaceStatus: sessionListEffectiveRaceStatusSchema,
  status: sessionListStatusSchema,
  startedAt: z.string().datetime({ offset: true }),
  endedAt: z.string().datetime({ offset: true }).nullable(),
  track: sessionListTrackSchema,
  source: sessionListSourceSchema,
  format: sessionListFormatSchema,
  participants: sessionListParticipantsSchema,
})

/** ========================= LIST RESPONSE ========================= */

export const sessionsListPaginationSchema = z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  totalItems: z.number().int().nonnegative(),
  totalPages: z.number().int().min(0),
})

export const sessionsListSortSchema = z.object({
  field: sessionListSortFieldSchema,
  direction: sortDirectionSchema,
})

export const sessionsListResponseSchema = z.object({
  items: z.array(sessionListItemSchema),
  pagination: sessionsListPaginationSchema,
  sort: sessionsListSortSchema,
})