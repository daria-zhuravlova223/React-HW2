
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


export default function ImgMediaCard(props) {
    return (
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.img}
        />
        
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }