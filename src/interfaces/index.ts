export interface LocationType {
  id: number
  title: string
  type: string
  count?: number
  state_id?: number
}

export interface WindowSize {
  width: number | undefined
  height: number | undefined
}

export interface AgencyType {
  id?: number
  thumbnail: string
  title: string
  phone: string
  socialLinks: Array<{ image: string; href: string }>
}
