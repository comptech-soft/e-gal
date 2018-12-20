<template>
    <div class="modal fade" id="EditContactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<section class="contact-form">
										<form id="form-edit-contact" class="contact-input">
											<div class="modal-header">
												<h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
												<button type="button" class="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">×</span>
												</button>
											</div>
											<div class="modal-body">
												<fieldset class="form-group col-12">
													<input type="text" id="name" class="name form-control" placeholder="Name">
												</fieldset>
												<fieldset class="form-group col-12">
													<input type="text" id="email" class="email form-control" placeholder="Email">
												</fieldset>
												<fieldset class="form-group col-12">
													<input type="text" id="phone" class="phone form-control" placeholder="Phone Number">
												</fieldset>
											</div>
											<div class="modal-footer">
												<fieldset class="form-group position-relative has-icon-left mb-0">
													<button type="button" id="edit-contact-item" class="btn btn-info edit-contact-item" data-dismiss="modal"><i class="la la-paper-plane-o d-lg-none"></i> <span class="d-none d-lg-block">Edit</span></button>
												</fieldset>
											</div>
										</form>
									</section>
								</div>
							</div>
						</div>
</template>
