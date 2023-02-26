export interface LocationType {
  id?: number
  title?: string
  type?: string
  state_id?: number | null
  count?: number
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

export interface IAgent {
  id: number
  name: string
  description?: string
  email?: string
  instagram?: string
  twitter?: string
  facebook?: string
  logo_url?: string
  expiry_date: Date
  created_at: Date
  updated_at: Date
  phone?: number
  socialLinks?: Array<{ image: string; href: string }>
}

export interface ICredit {
  id: number
  free: number
  regular: number
  sticky: number
  agent: number
}

export interface IPost {
  id: number
  title: string
  city_id: number
  city_title: string
  state_id: number
  state_title: string
  property_id: number
  property_title: string
  category_id: number
  category_title: string
  price?: number
  description: string
  media?: string[]
  is_sticky: boolean
  views: number
  is_reposted: boolean
  repost_count: number
  expiry_date: Date
  created_at: Date
  updated_at: Date
}
