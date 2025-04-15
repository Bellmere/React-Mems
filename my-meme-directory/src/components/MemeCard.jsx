import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image } from "@heroui/react";

const MemeCard = ({ meme }) => {
  return (
    <Card>
      <Image src={meme.imageUrl} alt={meme.name} />
      <CardBody>
        <h3>{meme.name}</h3>
        <p>{meme.likes} Likes</p>
      </CardBody>
    </Card>
  );
};

export default MemeCard;
