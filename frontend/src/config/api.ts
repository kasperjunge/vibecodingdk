// API Configuration for different environments
const getApiUrl = (): string => {
  // In production, use environment variable or fall back to relative path
  if (import.meta.env.PROD) {
    return import.meta.env.VITE_API_URL || '/api'
  }
  
  // In development, use proxy (handled by vite.config.ts)
  return '/api'
}

export const API_URL = getApiUrl()

export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_URL}${endpoint}`
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`)
  }

  return response.json()
} 