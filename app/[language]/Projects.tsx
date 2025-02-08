import AppMarkdown from '@/components/AppMarkdown';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/hooks/useLanguage';
import { L, Lang } from '@/lib/locale';

export default function Projects({ lang }: { lang: Lang }) {
  const { t } = useLanguage(lang);
  const projects = L.projects;
  return (
    <>
      <div className="mt-4 px-5 md:mt-10">
        {projects.map((project, idx) => (
          <Card key={idx} className="mb-5 bg-bw">
            <CardHeader>
              <CardTitle>{t(project.name)}</CardTitle>
              {!!project.badges?.length && (
                <CardDescription>
                  {project.badges.map((badge, idx) => (
                    <Badge key={idx} variant="neutral">
                      {t(badge)}
                    </Badge>
                  ))}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <AppMarkdown>{t(project.content)}</AppMarkdown>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
