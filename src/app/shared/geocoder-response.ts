export interface GeocoderResponseMetaData {
  request: string;
  found: string;
  results: string;
}

export interface MetaDataProperty {
  GeocoderResponseMetaData: GeocoderResponseMetaData;
}

export interface Component {
  kind: string;
  name: string;
}

export interface Address {
  country_code: string;
  formatted: string;
  Components: Component[];
}

export interface Premise {
  PremiseName: string;
}

export interface Thoroughfare {
  ThoroughfareName: string;
  Premise: Premise;
}

export interface Locality {
  LocalityName: string;
  Thoroughfare: Thoroughfare;
}

export interface Premise2 {
  PremiseName: string;
}

export interface Locality2 {
  Premise: Premise2;
}

export interface SubAdministrativeArea {
  SubAdministrativeAreaName: string;
  Locality: Locality2;
}

export interface AdministrativeArea {
  AdministrativeAreaName: string;
  Locality: Locality;
  SubAdministrativeArea: SubAdministrativeArea;
}

export interface Country {
  AddressLine: string;
  CountryNameCode: string;
  CountryName: string;
  AdministrativeArea: AdministrativeArea;
}

export interface AddressDetails {
  Country: Country;
}

export interface GeocoderMetaData {
  kind: string;
  text: string;
  precision: string;
  Address: Address;
  AddressDetails: AddressDetails;
}

export interface MetaDataProperty2 {
  GeocoderMetaData: GeocoderMetaData;
}

export interface Envelope {
  lowerCorner: string;
  upperCorner: string;
}

export interface BoundedBy {
  Envelope: Envelope;
}

export interface Point {
  pos: string;
}

export interface GeoObject {
  metaDataProperty: MetaDataProperty2;
  description: string;
  name: string;
  boundedBy: BoundedBy;
  Point: Point;
}

export interface FeatureMember {
  GeoObject: GeoObject;
}

export interface GeoObjectCollection {
  metaDataProperty: MetaDataProperty;
  featureMember: FeatureMember[];
}

export interface Response {
  GeoObjectCollection: GeoObjectCollection;
}

export interface GeocoderResponse {
  response: Response;
}
