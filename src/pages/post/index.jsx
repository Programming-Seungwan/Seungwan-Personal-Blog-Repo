import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function PostIndexPage() {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
}
