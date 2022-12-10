import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

interface PaperCardProps {
  actionButton: string;
  handleClick: () => void;
  title: string;
  imageHeight: string;
  imageURL?: string;
}

const PaperCard: React.FC<PaperCardProps> = ({
  actionButton,
  handleClick,
  title,
  imageHeight = "300",
  imageURL,
}) => {
  return (
    <Paper elevation={2}>
      <Card variant="outlined" style={{ textAlign: "center" }}>
        {imageURL && (
          <CardMedia
            component="img"
            height={imageHeight}
            image={imageURL}
            alt="waiting for results"
          />
        )}
        <CardContent>
          <Typography variant="h5">{title}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleClick} size="small">
            {actionButton}
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default PaperCard;
