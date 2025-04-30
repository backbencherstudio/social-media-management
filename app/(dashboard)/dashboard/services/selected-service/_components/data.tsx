import { Service } from '@/types/services';
import { Mail, FileText, ExternalLink } from 'lucide-react';

export const serviceOptions: Service[] = [
  {
    id: 'email-design',
    name: 'Email Design',
    description: 'Emails designed & implemented for your campaigns & flows. Works with any email platform.',
    icon: <Mail className="text-white" size={20} />,
    startingPrice: 99,
    endingPrice: 359,
    selectLabel: 'Email quantity',
    plans: [
      { value: 'basic-1', label: '1 Email/month ($99/mo)' },
      { value: 'standard-3', label: '3 Emails/month ($199/mo)' },
      { value: 'premium-5', label: '5 Emails/month ($359/mo)' },
    ]
  },
  {
    id: 'seo-blog-posts',
    name: 'SEO Blog Posts',
    description: 'SEO-optimized, 1000-word blog posts to increase rankings on Google.',
    icon: <FileText className="text-white" size={20} />,
    startingPrice: 99,
    endingPrice: 359,
    selectLabel: 'Select plan',
    plans: [
      { value: 'basic-1', label: '1 Blog post/month ($99/mo)' },
      { value: 'standard-3', label: '3 Blog posts/month ($199/mo)' },
      { value: 'premium-5', label: '5 Blog posts/month ($359/mo)' },
    ]
  },
  {
    id: 'seo-backlinks',
    name: 'SEO Backlinks',
    description: 'High-quality DA30+ backlinks to boost your website\'s search engine rankings.',
    icon: <ExternalLink className="text-white" size={20} />,
    startingPrice: 99,
    endingPrice: 359,
    selectLabel: 'Select plan',
    plans: [
      { value: 'basic-3', label: '3 Backlinks/month ($99/mo)' },
      { value: 'standard-6', label: '6 Backlinks/month ($199/mo)' },
      { value: 'premium-10', label: '10 Backlinks/month ($359/mo)' },
    ]
  }
];