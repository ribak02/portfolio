import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, description, dates, tags, image, links }) => {
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
      <CardFooter className='px-2 pb-2'>
        {links && links.length > 0 && (
          <div className='flex flex-row flex-wrap items-start gap-1'>
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target='_blank'>
                <Badge key={idx} className='flex gap-2 px-2 py-1 text-[10px]'>
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
