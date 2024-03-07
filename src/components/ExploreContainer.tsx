import './ExploreContainer.css';
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src="f3f8472218e9abd8320ee22f5574db6e.jpg" />
      <IonCardHeader>
        <IonCardTitle>Balendeza!!!!</IonCardTitle>
        <IonCardSubtitle>Talk to me my love</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>i come to serve you my master!</IonCardContent>
    </IonCard>
  );
};

export default ExploreContainer;
