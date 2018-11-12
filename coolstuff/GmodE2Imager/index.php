<?php

header("Content-Type: text/plain");

if(isset($_GET['image'])) {
    $img = $_GET['image'];
	
    $info = getimagesize($img);
    $source = getSource($info[2],$img);
    $width = $info[0];
    $height = $info[1];
	
    if($width*$height > 768432) {
        $scale = 1;
        while(round($width*$scale)*round($height*$scale) > 768432) {
            $scale -= 0.01;
        }
        $sw = round($width*$scale);
        $sh = round($height*$scale);
        $temp = imagecreatetruecolor($sw,$sh);
        imagecopyresampled($temp,$source,0,0,0,0,$width,$height,$width,$height);
        $source = $temp;
    }
	
    for($y=0;$y<$height;$y++) {
        for($x=0;$x<$width;$x++) {
            $rgb = imagecolorat($source,$x,$y);
            $r = ($rgb >> 16) & 0xFF;
            $g = ($rgb >> 8) & 0xFF;
            $b = $rgb & 0xFF;
			
			print(sprintf('%03d',$r));
			print(sprintf('%03d',$g));
			print(sprintf('%03d',$b));
        }
    }
}


function getSource($type,$img) {
    if($type == 1) $source = imagecreatefromgif($img);
    elseif($type == 2) $source = imagecreatefromjpeg($img);
    elseif($type == 3) $source = imagecreatefrompng($img);
    return $source;
}
?>