import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const ProjectCard = ({ title, description, dates, tags, image }) => {
  return (
    <Card
      className={
        'flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg'
      }
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className='h-40 w-full overflow-hidden object-cover object-top'
      />
      <CardHeader className='px-2'>
        <div className='space-y-1'>
          <CardTitle className='mt-1 text-base'>{title}</CardTitle>
          <time className='font-sans text-xs'>{dates}</time>
          <p className='prose dark:prose-invert max-w-full text-pretty font-sans text-xs text-muted-foreground'>
            {description}
          </p>
        </div>
      </CardHeader>
      <CardContent className='mt-auto flex flex-col px-2'>
        {tags && tags.length > 0 && (
          <div className='mt-2 flex flex-wrap gap-1'>
            {tags?.map((tag) => (
              <Badge
                className='px-1 py-0 text-[10px]'
                variant='secondary'
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
