<?php header("Content-type: application/json");


//================================================================
// SECTION Icons
//
// @icons
//================================================================
//________________________________________________________

$icons = array();

$sizesSquare = array(16, 20, 24, 29, 30, 32, 36, 40, 44, 48, 50, 55, 57, 58, 60, 63, 64, 66, 70, 71, 72, 75, 76, 80, 87, 88, 89, 96, 100, 107, 114, 120, 128, 142, 144, 150, 152, 167, 176, 180, 188, 192, 200, 225, 256, 284, 300, 310, 384, 388, 465, 512, 600, 620, 1024, 1240);

$sizesWide = array(
	array(310, 150),
	array(388, 188),
	array(465, 225),
	array(620, 300),
	array(775, 375),
	array(930, 450),
	array(1240, 600),
	array(2480, 1200),
);

//________________________________________________________

foreach ($sizesSquare as $size) {
	$s = $size."x".$size;
	$icons[] = array(
		"src"			=> "/assets/media/base/dark/favicon/".$s.".png.webp",
		"sizes"			=> $s,
		"type"			=> "image/webp",
		"purpose"		=> "any",
		"color_scheme"	=> "dark",
	);
	$icons[] = array(
		"src"			=> "/assets/media/base/light/favicon/".$s.".png.webp",
		"sizes"			=> $s,
		"type"			=> "image/webp",
		"purpose"		=> "any",
		"color_scheme"	=> "light",
	);
}
foreach ($sizesWide as $size) {
	$s = $size[0]."x".$size[1];
	$icons[] = array(
		"src"			=> "/assets/media/base/dark/favicon/".$s.".png.webp",
		"sizes"			=> $s,
		"type"			=> "image/webp",
		"purpose"		=> "any",
		"color_scheme"	=> "dark",
	);
	$icons[] = array(
		"src"			=> "/assets/media/base/light/favicon/".$s.".png.webp",
		"sizes"			=> $s,
		"type"			=> "image/webp",
		"purpose"		=> "any",
		"color_scheme"	=> "light",
	);
}

// !SECTION Icons
//________________________________________________________


//================================================================
// SECTION Result
//
// @result
//================================================================
//________________________________________________________

echo json_encode(array(
	"name"				=> "VQH-cmd",
	"lang"				=> "en",
	"short_name"		=> "VQH-cmd",
	"description"		=> "VQH-cmd | Developer - UI/UX - Designer",
	"id"				=> "/",
	"scope"				=> "/",
	"start_url"			=> "/",
	"dir"				=> "ltr",
	"theme_color"		=> "#0EF7D0",
	"background_color"	=> "#282B35",
	"orientation"		=> "any",
	"prefer_related_applications"	=> false,
	"display"			=> "standalone",
	"display_override"	=> array(
		"window-control-overlay",
		"standalone",
		"browser"
	),
	"categories"		=> array(
		"personalization",
		"utilities",
	),
	"screenshots"		=> array(
		array("src"	=> "/assets/media/base/dark/screenshot.jpeg.webp"),
		array("src"	=> "/assets/media/base/light/screenshot.jpeg.webp"),
	),
	"shortcuts"	=> array(
		array(
			"name"			=> "About",
			"short_name"	=> "About",
			"description"	=> "VQH-cmd | Developer - UI/UX - Designer",
			"url"			=> "/about",
			"icons"			=> array(
				array(
					"src"			=> "/assets/media/base/dark/shortcut/about.png.webp",
					"sizes"			=> "512x512",
					"type"			=> "image/webp",
					"color_scheme"	=> "dark",
				),
				array(
					"src"			=> "/assets/media/base/light/shortcut/about.png.webp",
					"sizes"			=> "512x512",
					"type"			=> "image/webp",
					"color_scheme"	=> "light",
				),
			),
		),
		array(
			"name"			=> "Service",
			"short_name"	=> "Service",
			"description"	=> "VQH-cmd | Developer - UI/UX - Designer",
			"url"			=> "/service",
			"icons"			=> array(
				array(
					"src"			=> "/assets/media/base/dark/shortcut/service.png.webp",
					"sizes"			=> "512x512",
					"type"			=> "image/webp",
					"color_scheme"	=> "dark",
				),
				array(
					"src"			=> "/assets/media/base/light/shortcut/service.png.webp",
					"sizes"			=> "512x512",
					"type"			=> "image/webp",
					"color_scheme"	=> "light",
				),
			),
		),
		array(
			"name"			=> "App",
			"short_name"	=> "App",
			"description"	=> "VQH-cmd | Developer - UI/UX - Designer",
			"url"			=> "/app",
			"icons"			=> array(
				array(
					"src"			=> "/assets/media/base/dark/shortcut/app.png.webp",
					"sizes"			=> "512x512",
					"type"			=> "image/webp",
					"color_scheme"	=> "dark",
				),
				array(
					"src"			=> "/assets/media/base/light/shortcut/app.png.webp",
					"sizes"			=> "512x512",
					"type"			=> "image/webp",
					"color_scheme"	=> "light",
				),
			),
		),
		array(
			"name"			=> "Contact",
			"short_name"	=> "Contact",
			"description"	=> "VQH-cmd | Developer - UI/UX - Designer",
			"url"			=> "/contact",
			"icons"			=> array(
				array(
					"src"			=> "/assets/media/base/dark/shortcut/contact.png.webp",
					"sizes"			=> "512x512",
					"type"			=> "image/webp",
					"color_scheme"	=> "dark",
				),
				array(
					"src"			=> "/assets/media/base/light/shortcut/contact.png.webp",
					"sizes"			=> "512x512",
					"type"			=> "image/webp",
					"color_scheme"	=> "light",
				),
			),
		),
	),
	"icons"	=> $icons,
));

// !SECTION Result
//________________________________________________________


?>