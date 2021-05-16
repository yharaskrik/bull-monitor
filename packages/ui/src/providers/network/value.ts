import { getJobData } from '@/network/queries/get-job-data';
import { getJobDataMock } from '@/demoMocks/network/queries/get-job-data';
import { getJobLogs } from '@/network/queries/get-job-logs';
import { getJobLogsMock } from '@/demoMocks/network/queries/get-job-logs';
import { getJobs } from '@/network/queries/get-jobs';
import { getJobsMock } from '@/demoMocks/network/queries/get-jobs';
import { getQueueCounts } from '@/network/queries/get-queue-counts';
import { getQueueCountsMock } from '@/demoMocks/network/queries/get-queue-counts';
import { getQueuesForDrawer } from '@/network/queries/get-queues-for-drawer';
import { getQueuesForDrawerMock } from '@/demoMocks/network/queries/get-queues-for-drawer';
import { getIsQueuePausedMock } from '@/demoMocks/network/queries/get-is-queue-paused';
import { getIsQueuePaused } from '@/network/queries/get-is-queue-paused';
import { getJobById } from '@/network/queries/get-job-by-id';
import { getJobByIdMock } from '@/demoMocks/network/queries/get-job-by-id';
import { getRedisInfo } from '@/network/queries/get-redis-info';
import { getRedisInfoMock } from '@/demoMocks/network/queries/get-redis-info';

import { createJobLog } from '@/network/mutations/create-job-log';
import { createJobLogMock } from '@/demoMocks/network/mutations/create-job-log';
import { discardJob } from '@/network/mutations/discard-job';
import { discardJobMock } from '@/demoMocks/network/mutations/discard-job';
import { moveJobToCompleted } from '@/network/mutations/move-job-to-completed';
import { moveJobToCompletedMock } from '@/demoMocks/network/mutations/move-job-to-completed';
import { moveJobToFailed } from '@/network/mutations/move-job-to-failed';
import { moveJobToFailedMock } from '@/demoMocks/network/mutations/move-job-to-failed';
import { promoteJob } from '@/network/mutations/promote-job';
import { promoteJobMock } from '@/demoMocks/network/mutations/promote-job';
import { retryJob } from '@/network/mutations/retry-job';
import { retryJobMock } from '@/demoMocks/network/mutations/retry-job';
import { updateJobData } from '@/network/mutations/update-job-data';
import { updateJobDataMock } from '@/demoMocks/network/mutations/update-job-data';
import { removeJob } from '@/network/mutations/remove-job';
import { removeJobMock } from '@/demoMocks/network/mutations/remove-job';
import { createJob } from '@/network/mutations/create-job';
import { createJobMock } from '@/demoMocks/network/mutations/create-job';
import { pauseQueue } from '@/network/mutations/pause-queue';
import { pauseQueueMock } from '@/demoMocks/network/mutations/pause-queue';
import { resumeQueueMock } from '@/demoMocks/network/mutations/resume-queue';
import { resumeQueue } from '@/network/mutations/resume-queue';
import { emptyQueue } from '@/network/mutations/empty-queue';
import { emptyQueueMock } from '@/demoMocks/network/mutations/empty-queue';
import { closeQueueMock } from '@/demoMocks/network/mutations/close-queue';
import { closeQueue } from '@/network/mutations/close-queue';
import { removeJobsByPatternMock } from '@/demoMocks/network/mutations/remove-jobs-by-pattern';
import { removeJobsByPattern } from '@/network/mutations/remove-jobs-by-pattern';
import { cleanQueueMock } from '@/demoMocks/network/mutations/clean-queue';
import { cleanQueue } from '@/network/mutations/clean-queue';

import { EnvConfig } from '@/config/env';

const { useMocks: m } = EnvConfig;

const queries = {
  getRedisInfo: m ? getRedisInfoMock : getRedisInfo,
  getJobData: m ? getJobDataMock : getJobData,
  getJobLogs: m ? getJobLogsMock : getJobLogs,
  getJobs: m ? getJobsMock : getJobs,
  getQueuesForDrawer: m ? getQueuesForDrawerMock : getQueuesForDrawer,
  getQueueCounts: m ? getQueueCountsMock : getQueueCounts,
  getIsQueuePaused: m ? getIsQueuePausedMock : getIsQueuePaused,
  getJobById: m ? getJobByIdMock : getJobById,
};
const mutations = {
  createJob: m ? createJobMock : createJob,
  createJobLog: m ? createJobLogMock : createJobLog,
  discardJob: m ? discardJobMock : discardJob,
  moveJobToCompleted: m ? moveJobToCompletedMock : moveJobToCompleted,
  moveJobToFailed: m ? moveJobToFailedMock : moveJobToFailed,
  promoteJob: m ? promoteJobMock : promoteJob,
  removeJob: m ? removeJobMock : removeJob,
  retryJob: m ? retryJobMock : retryJob,
  updateJobData: m ? updateJobDataMock : updateJobData,
  pauseQueue: m ? pauseQueueMock : pauseQueue,
  resumeQueue: m ? resumeQueueMock : resumeQueue,
  emptyQueue: m ? emptyQueueMock : emptyQueue,
  closeQueue: m ? closeQueueMock : closeQueue,
  removeJobsByPattern: m ? removeJobsByPatternMock : removeJobsByPattern,
  cleanQueue: m ? cleanQueueMock : cleanQueue,
};

export const networkContextValue = { mutations, queries };