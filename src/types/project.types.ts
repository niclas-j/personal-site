export type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: ImageMetadata;
  colorClass: string;
  url?: string;
  size?: number;
};
