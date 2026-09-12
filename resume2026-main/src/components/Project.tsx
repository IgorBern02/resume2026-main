type ProjectProps = {
  title: string;
  description: string;
  
  demoLink: string;
  projectLink?: string;
};

export function Project({
  title,
  description,
 
 
  demoLink,
  projectLink,
}: ProjectProps) {
  return (
    <div className="mb-4">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-800 mt-2">{description}</p>
      <div className="flex flex-col space-y-1">
<a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-500 hover:underline mt-2"
      >
        Ver Demonstração
      </a>
      {projectLink && (
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:underline mt-2"
        >
          Ver Código Fonte
        </a>
      )}
      </div>
      
    </div>
  );
}
