export type DevopsSettings = {
  apiKey: string;
  organization: string;
  project: string;
};

export type Settings = {
  saveToLocalStorage: boolean;
} & DevopsSettings;
