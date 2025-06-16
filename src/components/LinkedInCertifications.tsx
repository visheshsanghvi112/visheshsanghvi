
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Calendar, ExternalLink, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Real certifications data from Vishesh Sanghvi's LinkedIn
const certifications = [
  {
    id: 1,
    name: "Data Analysis with Python",
    organization: "Oasis Infobyte",
    issueDate: "October 2024",
    credentialId: "DSA1023_VI",
    skills: ["Python", "Data Analysis", "NumPy", "Pandas", "Matplotlib"],
    logo: "https://media.licdn.com/dms/image/C4D0BAQHOmjuZXJRO6g/company-logo_100_100/0/1670664318338/oasisinfobyte_logo?e=1727049600&v=beta&t=7rVQ5O6eFG3FEYsEjDXI_YEI1xpQjCNFPuScx0VN9aY"
  },
  {
    id: 2,
    name: "Cloud Computing",
    organization: "Pinnacle Labs",
    issueDate: "October 2024",
    credentialId: "CLCP102405",
    skills: ["Cloud Computing", "AWS", "Azure", "Infrastructure"],
    logo: "https://media.licdn.com/dms/image/D560BAQH9W5D9-f7XDQ/company-logo_100_100/0/1708940979080/pinnacle_labs_pune_logo?e=1727049600&v=beta&t=EUwmHHqjY2nkBmNu5J4yJDN7bOhXZxmvuNfyY27kDc8"
  },
  {
    id: 3,
    name: "Data Scientist",
    organization: "EVOASTRA VENTURES PVT LTD",
    issueDate: "September 2024",
    credentialId: "EVA243DS09",
    skills: ["Machine Learning", "Data Science", "Python", "SQL"],
    logo: "https://media.licdn.com/dms/image/D560BAQEoOJR7IkLSvw/company-logo_100_100/0/1708324811376/evoastra_ventures_pvt_ltd_logo?e=1727049600&v=beta&t=7OjXTiOc4EUAEPnKALZvdlEuH9pBidXXLpDWlBT6wJ0"
  },
  {
    id: 4,
    name: "Data Analysis",
    organization: "Cognifyz Technologies",
    issueDate: "August 2024",
    credentialId: "CAT-DA-082024",
    skills: ["Data Analysis", "Statistics", "Excel", "SQL", "Python"],
    logo: "https://media.licdn.com/dms/image/D4D0BAQHSY2HVGSobBw/company-logo_100_100/0/1704440087324/cognifyz_technologies_logo?e=1727049600&v=beta&t=UbHHrVD3RXPO5JDJXxRSZjpHbfkj21w8Bk6dxDdJ8H0"
  }
];

const LinkedInCertifications: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden">
      <CardHeader className="bg-primary/5 border-b border-border/40">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Award className="text-primary h-5 w-5" />
            <CardTitle>{t('components.linkedin.certifications')}</CardTitle>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1"
            onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi/details/certifications/", "_blank")}
          >
            <ExternalLink className="h-4 w-4" />
            {t('sections.linkedin.viewMore')}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex gap-4 border-b border-border/40 last:border-b-0 pb-4 last:pb-0">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 rounded overflow-hidden bg-muted flex items-center justify-center">
                  <img 
                    src={cert.logo} 
                    alt={cert.organization}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placeholder.svg';
                      target.onerror = null;
                    }}
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-base font-medium">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.organization}</p>
                
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Issued {cert.issueDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-3.5 w-3.5" />
                    <span>Credential ID: {cert.credentialId}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {cert.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedInCertifications;
