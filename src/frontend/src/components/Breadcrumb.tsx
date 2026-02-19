import { ChevronRight } from 'lucide-react';
import { NavigationPath } from '../types/script';

interface BreadcrumbProps {
  path: NavigationPath[];
  onNavigate: (index: number) => void;
}

export function Breadcrumb({ path, onNavigate }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      {path.map((item, index) => (
        <div key={item.id} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
          )}
          <button
            onClick={() => onNavigate(index)}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              index === path.length - 1
                ? 'bg-primary text-primary-foreground font-medium'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            {item.title}
          </button>
        </div>
      ))}
    </nav>
  );
}
