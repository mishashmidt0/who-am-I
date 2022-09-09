import { Box } from './styles';

import { ReturnComponentType } from 'types';

export interface TemplateNameProps {
  className?: string;
}

const TemplateName = ({ className }: TemplateNameProps): ReturnComponentType => {
  return <Box className={className}>TemplateName</Box>;
};

export default TemplateName;
