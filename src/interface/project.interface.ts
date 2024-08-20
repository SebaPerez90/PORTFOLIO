export interface IProject {
  title: string;
  descriptionES: string;
  descriptionEN: string;
  repository: string;
  deploy: string;
  skills: string[];
  detailedDescriptionEN: string[];
  detailedDescriptionES: string[];
  featuresEN: string[];
  featuresES: string[];
  screen_shoots: string[];
  development_stage?: boolean;
}
