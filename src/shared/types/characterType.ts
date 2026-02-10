export interface characterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface characterCardType {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: string;
  image: string;
}

export interface characterFiltersType {
  name: string;
  species: string;
  gender: string;
  status: string;
}
