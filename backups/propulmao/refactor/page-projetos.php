<?php
/**
 *
 * Template Name: Projetos
 *
 * @package understrap
 */
get_header();
function verifyIndex($index) {
  $result = $index % 2 == 1 ? 'no-revert' : 'revert';
  return $result;
}
?>
<section class="container  page-projetos">
	<?php
    // Check rows exists.
    if (have_rows('projects')):
      echo '<ul class=>';
      // sum iterations
      $index = 0;
      // Loop through rows.
      while (have_rows('projects')):
        the_row();
        $index++;
        $class = verifyIndex($index);
        ?>
	<li class="<?php echo $class ?> pp-c-container-bg-secondary">
		<div class="container-content">
			<h2 class="pp-c-title-medium-secondary mb-3">
				<?php echo get_sub_field('project') ?>
			</h2>
			<p class="pp-c-text-medium-secondary">
				<?php echo get_sub_field('project_text') ?>
			</p>
			<button class="pp-c-btn pp-c-btn-primary w-100 mt-auto " onclick="calculateLines(<?php echo $index; ?>)"
				data-toggle="modal" data-target="<?php echo '#seemore' . $index; ?>">
				Veja Mais
			</button>
			<div class="modal pp-c-modal fade" id="<?php echo 'seemore' . $index; ?>" tabindex="-1" role="dialog"
				aria-labelledby="seeMoreTitle" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered d-flex flex-column" role="document">

					<header class="d-flex justify-content-end w-100">
						<button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close">
							<img src="<?php echo get_template_directory_uri(); ?>/imgs/modal-close.svg" />
						</button>
					</header>



					<div class=" container-content flex-column align-items-center d-flex d-lg-block">
						<img src="<?php echo get_sub_field('project_image') ?>" class="float-lg-right image-right content-right"
							alt="ilustração">
						<div class="container-left">
							<h2 class="text-center text-xl-left pp-c-title-medium-secondary">
								<?php echo get_sub_field('project') ?>
							</h2>
							<p class="pp-c-text-medium-secondary">
								<?php echo get_sub_field('project_modal_text') ?>
							</p>
						</div>
					</div>

					<footer class="w-100 d-flex flex-column align-items-center">
						<hr class="w-100 " />

						<p>Compartilhar case</p>

						<div class="d-flex align-items-center modal-container-logos-footer">
							<?php
							// Check rows exists.
							if (have_rows('project_social_links')):
								echo '<ul class="list-social-links d-flex align-items-center flex-row p-0">';
								// Loop through rows.
								while (have_rows('project_social_links')):
									the_row();
									?>
	<li>
		<a href="<?php echo get_sub_field('project_social_link_href') ?>" target="_blank">
			<img src="<?php echo get_sub_field('project_social_link_image') ?>" alt="Logo Rede Social" />
		</a>
	</li>
	<?php
									// End loop.
								endwhile;
								echo '</ul>';
								?>
	<?php
							// No value.
							else:
								// No rows found
							endif;
							?>
	</div>
	</footer>
	</div>

	</div>
	</div>
	<div class="container-image align-items-stretch">
		<img src="<?php echo get_sub_field('project_image') ?>" alt="ilustração">
	</div>
	</li>
	<?php
        // End loop.
      endwhile;
      echo '</ul>';
      ?>
	<?php
    // No value.
    else:
      // No rows found
    endif;
    ?>
</section>
<?php get_footer(); ?>
