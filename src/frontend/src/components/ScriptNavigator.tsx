import { useState } from 'react';
import { ScriptNode, NavigationPath } from '../types/script';
import { scriptData } from '../data/scriptData';
import { DiagnosisScreen } from './DiagnosisScreen';
import { RefinementScreen } from './RefinementScreen';
import { ScriptDetailView } from './ScriptDetailView';
import { Breadcrumb } from './Breadcrumb';

export function ScriptNavigator() {
  const [navigationPath, setNavigationPath] = useState<NavigationPath[]>([
    { id: 'start', title: 'START' }
  ]);

  const getCurrentNode = (): ScriptNode => {
    let currentNode = scriptData;
    
    for (let i = 1; i < navigationPath.length; i++) {
      const pathId = navigationPath[i].id;
      const foundChild = currentNode.children?.find(child => child.id === pathId);
      if (foundChild) {
        currentNode = foundChild;
      }
    }
    
    return currentNode;
  };

  const handleNavigate = (node: ScriptNode) => {
    setNavigationPath([...navigationPath, { id: node.id, title: node.title }]);
  };

  const handleBreadcrumbClick = (index: number) => {
    setNavigationPath(navigationPath.slice(0, index + 1));
  };

  const handleBack = () => {
    if (navigationPath.length > 1) {
      setNavigationPath(navigationPath.slice(0, -1));
    }
  };

  const currentNode = getCurrentNode();
  const isDetailView = !currentNode.children || currentNode.children.length === 0;

  return (
    <div className="max-w-5xl mx-auto">
      <Breadcrumb 
        path={navigationPath} 
        onNavigate={handleBreadcrumbClick}
      />
      
      <div className="mt-6">
        {isDetailView ? (
          <ScriptDetailView 
            node={currentNode} 
            onBack={handleBack}
          />
        ) : currentNode.id === 'start' ? (
          <DiagnosisScreen 
            node={currentNode} 
            onNavigate={handleNavigate}
          />
        ) : (
          <RefinementScreen 
            node={currentNode} 
            onNavigate={handleNavigate}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}
