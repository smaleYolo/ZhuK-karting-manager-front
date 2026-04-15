import { z } from 'zod'

import {
  consistencyModelSchema,
  effectiveRaceStatusSchema,
  gapSchema,
  metaBlockSchema,
  overviewBestMetricSchema,
  overviewBlockSchema,
  overviewEventsSchema,
  overviewLapsSchema,
  overviewParticipantRefSchema,
  participantClassificationSchema,
  participantConsistencySchema,
  participantDisplayNameSourceSchema,
  participantIdentityDisplayNameSchema,
  participantIdentitySchema,
  participantIdentityStudentSchema,
  participantIncidentsSchema,
  participantKartsSchema,
  participantOfficialStatusSchema,
  participantPaceSchema,
  participantPitSchema,
  participantRowSchema,
  pilotScoreComponentsSchema,
  pilotScoreExplainFlagSchema,
  pilotScoreExplainSchema,
  pilotScoreGradeSchema,
  pilotScoreModelHardRulesSchema,
  pilotScoreModelSchema,
  pilotScoreModelWeightsSchema,
  pilotScoreSchema,
  sessionBlockSchema,
  sessionDetailsResponseSchema,
  sessionFormatLimitTypeSchema,
  sessionFormatSchema,
  sessionSourceCompletenessSchema,
  sessionSourceProviderSchema,
  sessionSourceSchema,
  sessionStatusSchema,
  sessionTypeSchema,
  sourceCoverageSchema,
  sourceInputsSchema,
  studentMappingStatusSchema,
  trackConfigurationSchema,
  trackSchema,
  sessionListEffectiveRaceStatusSchema,
  sessionListFormatLimitTypeSchema,
  sessionListItemSchema,
  sessionListMappingStatusSchema,
  sessionListParticipantsSchema,
  sessionsListQuerySchema,
  sessionListSortFieldSchema,
  sessionListSourceCompletenessSchema,
  sessionListSourceSchema,
  sessionListStatusSchema,
  sessionListTrackConfigurationSchema,
  sessionListTrackSchema,
  sessionListTypeSchema,
  sessionListFormatSchema,
  sessionsListPaginationSchema,
  sessionsListResponseSchema,
  sessionsListSortSchema,
  sortDirectionSchema,
} from './schema'

/** ========================= ROOT ========================= */

export type SessionDetailsResponse = z.infer<typeof sessionDetailsResponseSchema>

/** ========================= SESSION ========================= */

export type SessionBlock = z.infer<typeof sessionBlockSchema>
export type SessionSource = z.infer<typeof sessionSourceSchema>
export type SourceInputs = z.infer<typeof sourceInputsSchema>
export type Track = z.infer<typeof trackSchema>
export type TrackConfiguration = z.infer<typeof trackConfigurationSchema>
export type SessionFormat = z.infer<typeof sessionFormatSchema>

/** ========================= OVERVIEW ========================= */

export type OverviewBlock = z.infer<typeof overviewBlockSchema>
export type OverviewParticipantRef = z.infer<typeof overviewParticipantRefSchema>
export type OverviewBestMetric = z.infer<typeof overviewBestMetricSchema>
export type OverviewEvents = z.infer<typeof overviewEventsSchema>
export type OverviewLaps = z.infer<typeof overviewLapsSchema>

/** ========================= TABLE ========================= */

export type ParticipantRow = z.infer<typeof participantRowSchema>
export type ParticipantIdentity = z.infer<typeof participantIdentitySchema>
export type ParticipantIdentityDisplayName = z.infer<typeof participantIdentityDisplayNameSchema>
export type ParticipantIdentityStudent = z.infer<typeof participantIdentityStudentSchema>
export type ParticipantClassification = z.infer<typeof participantClassificationSchema>
export type ParticipantKarts = z.infer<typeof participantKartsSchema>
export type ParticipantPace = z.infer<typeof participantPaceSchema>
export type ParticipantConsistency = z.infer<typeof participantConsistencySchema>
export type ParticipantPit = z.infer<typeof participantPitSchema>
export type ParticipantIncidents = z.infer<typeof participantIncidentsSchema>
export type Gap = z.infer<typeof gapSchema>
export type PilotScore = z.infer<typeof pilotScoreSchema>
export type PilotScoreComponents = z.infer<typeof pilotScoreComponentsSchema>
export type PilotScoreExplain = z.infer<typeof pilotScoreExplainSchema>

/** ========================= META ========================= */

export type MetaBlock = z.infer<typeof metaBlockSchema>
export type SourceCoverage = z.infer<typeof sourceCoverageSchema>
export type ConsistencyModel = z.infer<typeof consistencyModelSchema>
export type PilotScoreModel = z.infer<typeof pilotScoreModelSchema>
export type PilotScoreModelWeights = z.infer<typeof pilotScoreModelWeightsSchema>
export type PilotScoreModelHardRules = z.infer<typeof pilotScoreModelHardRulesSchema>

/** ========================= ENUM TYPES ========================= */

export type SessionSourceProvider = z.infer<typeof sessionSourceProviderSchema>
export type SessionSourceCompleteness = z.infer<typeof sessionSourceCompletenessSchema>
export type SessionType = z.infer<typeof sessionTypeSchema>
export type EffectiveRaceStatus = z.infer<typeof effectiveRaceStatusSchema>
export type SessionStatus = z.infer<typeof sessionStatusSchema>
export type SessionFormatLimitType = z.infer<typeof sessionFormatLimitTypeSchema>
export type ParticipantDisplayNameSource = z.infer<typeof participantDisplayNameSourceSchema>
export type StudentMappingStatus = z.infer<typeof studentMappingStatusSchema>
export type ParticipantOfficialStatus = z.infer<typeof participantOfficialStatusSchema>
export type PilotScoreGrade = z.infer<typeof pilotScoreGradeSchema>
export type PilotScoreExplainFlag = z.infer<typeof pilotScoreExplainFlagSchema>

/** ========================= LIST ========================= */

export type SessionsListResponse = z.infer<typeof sessionsListResponseSchema>
export type SessionsListQuery = z.infer<typeof sessionsListQuerySchema>
export type SessionListItem = z.infer<typeof sessionListItemSchema>
export type SessionListTrack = z.infer<typeof sessionListTrackSchema>
export type SessionListTrackConfiguration = z.infer<typeof sessionListTrackConfigurationSchema>
export type SessionListSource = z.infer<typeof sessionListSourceSchema>
export type SessionListFormat = z.infer<typeof sessionListFormatSchema>
export type SessionListParticipants = z.infer<typeof sessionListParticipantsSchema>
export type SessionsListPagination = z.infer<typeof sessionsListPaginationSchema>
export type SessionsListSort = z.infer<typeof sessionsListSortSchema>

/** ========================= LIST ENUM TYPES ========================= */

export type SessionListType = z.infer<typeof sessionListTypeSchema>
export type SessionListEffectiveRaceStatus = z.infer<typeof sessionListEffectiveRaceStatusSchema>
export type SessionListStatus = z.infer<typeof sessionListStatusSchema>
export type SessionListSourceCompleteness = z.infer<typeof sessionListSourceCompletenessSchema>
export type SessionListFormatLimitType = z.infer<typeof sessionListFormatLimitTypeSchema>
export type SessionListMappingStatus = z.infer<typeof sessionListMappingStatusSchema>
export type SessionListSortField = z.infer<typeof sessionListSortFieldSchema>
export type SortDirection = z.infer<typeof sortDirectionSchema>