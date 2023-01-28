<?php

/**
 *
 * Template Name: Fotos
 *
 * @package understrap
 */

get_header();
?>

<section class="container  page-fotos">
	<?php
		// Check rows exists.
		if (have_rows('galerias')) :
			echo '<ul class="list-articles d-flex flex-column">';
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
</section>

<?php get_footer(); ?>
