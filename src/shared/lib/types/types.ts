export type Role =
  | "tank"
  | "fighter"
  | "assassin"
  | "mage"
  | "marksman"
  | "helper";

export type Lane = "mid" | "gold" | "exp" | "jungle" | "roam";
export type Hero = {
  name: string;
  role: Role[];
  lane: Lane[];
  icon?: string;
};
