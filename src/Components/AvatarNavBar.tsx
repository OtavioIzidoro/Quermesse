import React from 'react';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: blackA.blackA3,
});



const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

// Exports
export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

// Your app...
const Flex = styled('div', { display: 'flex' });

const AvatarDemo = () => (
  <Flex css={{ gap: 20 }}>
    <a href="/Login">Acessar</a>
    <Avatar>
      
      <AvatarImage
        src="https://static.vecteezy.com/ti/vetor-gratis/p1/2002332-icone-personagem-isolado-de-avatar-negro-gr%C3%A1tis-vetor.jpg"
        alt="Colm Tuite"
      />
      <AvatarFallback delayMs={600}>CT</AvatarFallback>
    </Avatar>
    
    
  </Flex>
);

export default AvatarDemo;

