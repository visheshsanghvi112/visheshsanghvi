
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
    <Card className="bg-card border border-border/20">
      <CardHeader className="border-b border-border/20">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Award className="text-primary h-5 w-5" />
            <CardTitle>Certifications</CardTitle>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1"
            onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/details/certifications/", "_blank")}
          >
            <ExternalLink className="h-4 w-4" />
            View All
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          {certifications.slice(0, 3).map((cert) => (
            <div key={cert.id} className="group p-3 rounded-lg border border-border/20 hover:border-border/40 transition-colors">
              <div className="flex gap-3">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center border border-border/20">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.organization}</p>
                  
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span>Issued {cert.issueDate}</span>
                    <span>•</span>
                    <span>ID: {cert.credentialId}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{cert.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => window.open("https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/details/certifications/", "_blank")}
          >
            View All {certifications.length} Certifications
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedInCertifications;
