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
  logo_url?: string
  subscription_ends_date: Date
  expiry_date: Date
  created_at: Date
  updated_at: Date
  phone?: string
  socialLinks?: Array<{ image: string; href: string }>
  user_id?: number
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
  public_date: Date
  phone?: string
}

export interface BreadcrumbType {
  title: string
  href: string
  type: number[]
  isLink: boolean
}

export interface PostsWithUser extends IPost {
  user_id?: number
  user_phone?: string
  postedDate?: string
  postedTime?: string
  publicDate?: string
  publicTime?: string
  expiredDate?: string
  expiredTime?: string
  repostedDate?: string
  repostedTime?: string
  stickyDate?: string
  stickyTime?: string
  post_type?: string
  deletedDate?: string
  deletedTime?: string
  unStickTime?: string
  unStickDate?: string
}

export interface LogType {
  id: number
  post_id: number | null
  transaction: string | null
  user: string
  activity: string
  publish_date: string
}

export interface IUser {
  id: number
  phone: string
  password: string
  status: string
  is_admin: boolean
  is_agent: boolean
  is_deleted: boolean
  admin_comment: string
  created_at: Date
  updated_at: Date
}

export interface AdminUser {
  id: number
  phone: string
  status: string
  adminComment: string
  registeredTime: string
  registeredDate: string
  is_blocked: boolean
  is_deleted: boolean
  is_agent: boolean
  credits: {
    id: number
    free: number
    regular: number
    sticky: number
    agent: number
  }
  subscriptionStartTime: string
  subscriptionStartDate: string
  subscriptionEndsTime: string
  subscriptionEndsDate: string
  lastActivityDate: string
  lastActivityTime: string
  payment: {
    regular: number
    sticky: number
    agent: number
  }
  post: {
    total: number
    active: number
    archived: number
    repost: number
    deleted: number
  }
}

export interface TransactionType {
  id: number
  status: string
  package_title: string
  amount: number
  tran_id: string
  created_at: Date
  updated_at: Date
  user: {
    phone: string
    admin_comment: string
  }
}
