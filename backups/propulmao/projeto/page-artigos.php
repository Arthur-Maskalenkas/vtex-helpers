<?php
/**
 *
 * Template Name: Artigos
 *
 * @package understrap
 */

get_header();

?>

<section class="page-articles">

	<?php
		// Check rows exists.
		if (have_rows('artigos')) :
			echo '<ul class="list-articles">';
			// Loop through rows.
			while (have_rows('artigos')) :
				the_row();
		?>
	<li>
		<article>
			<p>
				<?php echo get_sub_field('article_text') ?>
			</p>

			<a href="<?php echo get_sub_field('article_link') ?>">
				<?php
				$subfield = get_sub_field('article');
				 echo "Acesse o $subfield"  ?>
			</a>
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
