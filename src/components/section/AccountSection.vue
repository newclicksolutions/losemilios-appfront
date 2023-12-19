<template>
    <div class="col-lg-9 ps-xl-5">
        <div class="user-panel-title-box">
            <h3>{{ SectionData.editProfileData.title }}</h3>
        </div><!-- end user-panel-title-box -->
        <div class="profile-setting-panel-wrap">
            <ul class="nav nav-tabs nav-tabs-s1 nav-tabs-mobile-size" id="myTab" role="tablist">
                <li class="nav-item" role="presentation" v-for="list in SectionData.editProfileData.editProfileTabNav"
                    :key="list.id">
                    <button class="nav-link" :class="list.isActive" :id="list.slug" data-bs-toggle="tab"
                        :data-bs-target="list.bsTarget" type="button">{{ list.title }}</button>
                </li>
            </ul>
            <div class="tab-content mt-4" id="myTabContent">
                <div class="tab-pane fade show active" id="account-information" role="tabpanel"
                    aria-labelledby="account-information-tab">
                    <div class="profile-setting-panel">
                        <form @submit.prevent="registrar">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-floating mb-4">
                                        <input type="text" class="form-control" v-model="regisData.fullName" id="fullName"
                                            placeholder="Nombre" required>
                                        <label for="fullName">{{UserData[0]?.nombre  }}</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating mb-4">
                                        <input type="text" class="form-control" v-model="regisData.apellido" id="apellido"
                                            placeholder="Apellido" required>
                                        <label for="apellido">{{UserData[0]?.correo  }}</label>
                                    </div>
                                </div>
                            </div>
                            <!-- end form-floating -->
                            <div class="form-floating mb-4">
                                <input type="email" class="form-control" v-model="regisData.emailAddress" id="emailAddress"
                                    placeholder="name@example.com" required>
                                <label for="emailAddress">{{UserData[0]?.correo  }}</label>
                            </div>
                            <div class="form-floating mb-4">
                                <input type="number" class="form-control" v-model="regisData.tel" id="tel"
                                    placeholder="Telefono" required>
                                <label for="tel">{{UserData[0]?.telefono  }}</label>
                            </div><!-- end form-floating -->

                            <div class="form-floating mb-4">
                                <input type="text" class="form-control" v-model="regisData.direccion" id="direccion"
                                    placeholder="Direccion de entrega" required>
                                <label for="direccion">{{UserData[0]?.direccion  }}</label>
                            </div>
                            <!-- end form-floating -->
                            <button class="btn btn-primary mt-3" type="submit">Actualizar Perfil</button>
                        </form>
                    </div><!-- end profile-setting-panel -->
                </div><!-- end tab-pane -->
                <div class="tab-pane fade" id="change-password" role="tabpanel" aria-labelledby="change-password-tab">
                    <div class="profile-setting-panel">


                        <h5 class="mb-4">Cambiar Contraseña</h5>
                        <div class="mb-3">
                            <label for="oldPassword" class="form-label">Contraseña actual</label>
                            <div class="position-relative">
                                <input type="password" class="form-control form-control-s1" id="oldPassword" placeholder="">
                                <a href="oldPassword" class="password-toggle" title="Toggle show/hide pasword">
                                    <em class="password-shown ni ni-eye-off"></em>
                                    <em class="password-hidden ni ni-eye"></em>
                                </a>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="newPassword" class="form-label">Nueva Contraseña</label>
                            <div class="position-relative">
                                <input type="password" class="form-control form-control-s1" id="newPassword" placeholder="">
                                <a href="newPassword" class="password-toggle" title="Toggle show/hide pasword">
                                    <em class="password-shown ni ni-eye-off"></em>
                                    <em class="password-hidden ni ni-eye"></em>
                                </a>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="confirmNewPassword" class="form-label">Confirmar nueva Contraseña</label>
                            <div class="position-relative">
                                <input type="password" class="form-control form-control-s1" id="confirmNewPassword"
                                    placeholder="">
                                <a href="confirmNewPassword" class="password-toggle" title="Toggle show/hide pasword">
                                    <em class="password-shown ni ni-eye-off"></em>
                                    <em class="password-hidden ni ni-eye"></em>
                                </a>
                            </div>
                        </div>
                        <button class="btn btn-primary mt-3" type="button">Actualizar Contraseña</button>



                    </div><!-- end profile-setting-panel -->
                </div><!-- end tab-pane -->
               
            </div><!-- end tab-content -->
        </div><!-- end profile-setting-panel-wrap-->
    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'

export default {
    name: 'AccountSection',
    data() {
        return {
            SectionData,
            regisData: [],
            UserData: []
        }
    },
    mounted() {
        if (localStorage.getItem("UserData")) {
            this.UserData = JSON.parse(localStorage.getItem("UserData"));
        }
        /*===========SHOW UPLOADED IMAGE ================== */
        function uploadImage(selector) {
            let elem = document.querySelectorAll(selector)
            if (elem.length > 0) {
                elem.forEach(item => {
                    item.addEventListener('change', function () {
                        if (item.files && item.files[0]) {
                            let img = document.getElementById(item.dataset.target)
                            img.onload = function () {
                                URL.revokeObjectURL(img.src)
                            }
                            img.src = URL.createObjectURL(item.files[0])

                            let allowedExtensions = ['jpg', 'JPEG', 'JPG', 'png']
                            let fileExtension = this.value.split('.').pop()
                            var lastDot = this.value.lastIndexOf('.')
                            var ext = this.value.substring(lastDot + 1)
                            var extTxt = img.value = ext
                            if (!allowedExtensions.includes(fileExtension)) {
                                alert(extTxt + ' file type not allowed, Please upload jpg, JPG, JPEG, or png file')
                                img.src = ' '
                            }
                        }
                    })
                })
            }
        }

        uploadImage('.upload-image')

        /* =========== Show/Hide passoword ============== */
        function showHidePassword(selector) {
            let elem = document.querySelectorAll(selector);
            if (elem.length > 0) {
                elem.forEach(item => {
                    item.addEventListener("click", function (e) {
                        e.preventDefault();
                        let target = document.getElementById(item.getAttribute("href"));
                        if (target.type == "password") {
                            target.type = "text";
                            item.classList.add("is-shown");
                        } else {
                            target.type = "password";
                            item.classList.remove("is-shown");
                        }
                    });

                });
            }
        }

        showHidePassword(".password-toggle");

    },
    methods: {
        async registrar() {
            const result = await this.$store.dispatch('registarusuario', this.regisData)
            console.log(result)

            if (result.error) {
                this.$refs.notification.showNotification('Usuario el ya existe ', '#D11D23')
            }
            if (result.success) {
                this.$router.push('/login');
            }

        }
    },
    computed:{
        users(){
            return this.$store.state.userdata        }
    }
}
</script>
