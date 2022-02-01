import AppEntity from '@/entities/app.entity';
import { Service } from '@/services/service';

export const useAppService = () => {
  return new (class SurveyQuestionService extends Service<AppEntity>() {})();
};
