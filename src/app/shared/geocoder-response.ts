export interface GeocoderResponse {
  response: {
    GeoObjectCollection: {
      featureMember: {
        GeoObject: GeoObject;
      }[];
      metaDataProperty: {
        request: string;
        results: number;
        found: number;
      };
    };
  };
}

export interface GeoObject {
  Point: {
    pos: string;
  };
  description: string;
  name: string;
}
