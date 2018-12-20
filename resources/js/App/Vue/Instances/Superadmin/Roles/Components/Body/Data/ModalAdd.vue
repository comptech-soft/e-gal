<template>
    <div class="modal fade" id="AddContactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
							    <div class="modal-dialog" role="document">
								    <div class="modal-content">
                                        <section class="contact-form">
                                            <form id="form-add-contact" class="contact-input">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel1">Add New Task</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <fieldset class="form-group col-12">
                                                        <input type="text" id="contact-name" class="contact-name form-control" placeholder="Name">
                                                    </fieldset>
                                                    <fieldset class="form-group col-12">
                                                        <input type="text" id="contact-email" class="contact-email form-control" placeholder="Email">
                                                    </fieldset>
                                                    <fieldset class="form-group col-12">
                                                        <input type="text" id="contact-phone" class="contact-phone form-control" placeholder="Phone Number">
                                                    </fieldset>
                                                    <fieldset class="form-group col-12">
                                                        <div class="icheckbox_square-blue" style="position: relative;"><input type="checkbox" id="favorite" class="contact-fav input-chk" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div> Favorite
                                                    </fieldset>
                                                    <fieldset class="form-group col-12">
                                                        <input type="file" class="form-control-file" id="user-image">
                                                    </fieldset>
                                                </div>
                                                <div class="modal-footer">
                                                    <fieldset class="form-group position-relative has-icon-left mb-0">
                                                        <button type="button" id="add-contact-item" class="btn btn-info add-contact-item" data-dismiss="modal"><i class="la la-paper-plane-o d-lg-none"></i> <span class="d-none d-lg-block">Add New</span></button>
                                                    </fieldset>
                                                </div>
                                            </form>
                                        </section>
								    </div>
							    </div>
						    </div>
</template>
