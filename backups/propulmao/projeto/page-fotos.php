<?php

/**
 *
 * Template Name: Fotos
 *
 * @package understrap
 */

get_header();
?>

<div>
	Fotos
	<section class="container  page-fotos">
		<?php
		// Check rows exists.
		if (have_rows('galerias')) :
			echo '<ul class="list-articles">';
			// Loop through rows.
			while (have_rows('galerias')) :
				the_row();
		?>
		<li class="item-article">
			<article>
				<h2>
					<?php echo get_sub_field('gallery_name') ?>
				</h2>

				<p>
					<?php echo get_sub_field('gallery_text') ?>
				</p>


				<?php
				$lista = get_sub_field('gallery_imagens');
				if(!empty($lista)){
						echo '<div class="center">';
						foreach ($lista as $item) {
								$img_src = htmlspecialchars($item['gallery_imagen']);
								echo '<li><img src="' . $img_src . '"></li>';
						}
						echo '</div>';
				}
		?>
		<li>

		</li>
		</article>
		</li>
		<?php
			// End loop.
			endwhile;
			echo '</ul>';
			?>
		<?php
		// No value.
		else :
		// No rows found
		endif;
		?>

		<ul>
			<li class="item-article">
				<article ">
				<h2>
					Galeria 1
				</h2>
				<p>Galeria de imagens do evento X</p>
</div>



		<!-- <div class=" center">
					<div>your content</div>
					<div>your content</div>
					<div>your content</div>
					<div>your content</div>
					<div>your content</div>
					<div>your content</div>
					<div>your content</div>
					<div>your content</div>
					<div>your content</div>
</div> -->
</section>
</div>

<?php get_footer(); ?>
