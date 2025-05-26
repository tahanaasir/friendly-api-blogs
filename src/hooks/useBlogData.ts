
import { useQuery } from '@tanstack/react-query';
import { blogApi } from '@/services/blogApi';

export const useBlogPosts = (category?: string) => {
  return useQuery({
    queryKey: ['blogPosts', category],
    queryFn: () => blogApi.getPosts(category),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useBlogPost = (id: string) => {
  return useQuery({
    queryKey: ['blogPost', id],
    queryFn: () => blogApi.getPost(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useFeaturedPosts = () => {
  return useQuery({
    queryKey: ['featuredPosts'],
    queryFn: () => blogApi.getFeaturedPosts(),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useSearchPosts = (query: string) => {
  return useQuery({
    queryKey: ['searchPosts', query],
    queryFn: () => blogApi.searchPosts(query),
    enabled: query.length > 0,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};
