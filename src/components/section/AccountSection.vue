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
                                        <input type="text" class="form-control" v-model="regisData.name" id="fullName"
                                            placeholder="Nombre" required>
                                        <label for="fullName">Nombre</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating mb-4">
                                        <input type="text" class="form-control" v-model="regisData.last_name"
                                            id="apellido" placeholder="Apellido" required>
                                        <label for="apellido">Aellido</label>
                                    </div>
                                </div>
                            </div>
                            <!-- end form-floating -->
                            <div class="form-floating mb-4">
                                <input type="email" class="form-control" v-model="regisData.email" id="emailAddress"
                                    placeholder="name@example.com" required>
                                <label for="emailAddress">Correo</label>
                            </div>
                            <div class="form-floating mb-4">
                                <input type="number" class="form-control" v-model="regisData.phone" id="tel"
                                    placeholder="Telefono" required>
                                <label for="tel">Telefono</label>
                            </div><!-- end form-floating -->

                            <div class="form-floating mb-4">
                                <select class="form-control" v-model="regisData.shipping_neighborhood" id="barrio"
                                    required>
                                    <option value="" disabled>Selecciona un barrio</option>
                                    <option v-for="b in JSON.parse(configvar[0].neighborhood_list)" :key="b" :value="b">{{ b }}</option>
                                </select>
                                <label for="barrio">Barrio</label>
                            </div>

                            <div class="form-floating mb-4">
                                <input type="text" class="form-control" v-model="regisData.shipping_address"
                                    id="direccion" placeholder="Direccion de entrega" required>
                                <label for="direccion">Direccion</label>
                            </div>
                            <!-- end form-floating -->
                            <button class="btn btn-primary mt-3" type="submit" @click="actualizarPerfil">Actualizar
                                Perfil</button>
                        </form>
                    </div><!-- end profile-setting-panel -->
                </div><!-- end tab-pane -->
                <div class="tab-pane fade" id="change-password" role="tabpanel" aria-labelledby="change-password-tab">
                    <div class="profile-setting-panel">
                        <h5 class="mb-4">Cambiar Contraseña</h5>

                        <div class="mb-3">
                            <label for="newPassword" class="form-label">Nueva Contraseña</label>
                            <div class="position-relative">
                                <input type="password" class="form-control form-control-s1" id="newPassword"
                                    v-model="newPassword" placeholder="">
                                <a href="newPassword" class="password-toggle" title="Toggle show/hide password">
                                    <em class="password-shown ni ni-eye-off"></em>
                                    <em class="password-hidden ni ni-eye"></em>
                                </a>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="confirmNewPassword" class="form-label">Confirmar nueva Contraseña</label>
                            <div class="position-relative">
                                <input type="password" v-model="confirmPassword" class="form-control form-control-s1"
                                    id="confirmNewPassword" placeholder="">
                                <a href="confirmNewPassword" class="password-toggle" title="Toggle show/hide password">
                                    <em class="password-shown ni ni-eye-off"></em>
                                    <em class="password-hidden ni ni-eye"></em>
                                </a>
                            </div>
                        </div>

                        <button class="btn btn-primary mt-3" type="button" @click="actualizarPerfilpassword">Actualizar
                            Contraseña</button>
                    </div>
                </div><!-- end tab-pane -->

            </div><!-- end tab-content -->
        </div><!-- end profile-setting-panel-wrap-->
        <Notification ref="notification" />
    </div><!-- end col-lg-8 -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from '@/store/store.js'
import Notification from '../common/Notification.vue'

export default {
    name: 'AccountSection',
    components: {
        Notification
    },
    data() {
        return {
            SectionData,
            regisData: [],
            UserData: [],
            barriosMedellin: [
                'Belén', 'Laureles', 'El Poblado', 'Robledo', 'Manrique',
                'Aranjuez', 'Buenos Aires', 'San Javier', 'Castilla',
                'Doce de Octubre', 'Villa Hermosa', 'Popular', 'Guayabal',
                'La América', 'Santa Cruz'
            ],
            newPassword: '',
            confirmPassword: '',
        }
    },
    async mounted() {

        this.UserData = await this.$store.dispatch('getUsers')
        console.log(this.UserData)
        this.regisData.user_id = this.UserData.user_id
        this.regisData.name = this.UserData.name
        this.regisData.last_name = this.UserData.last_name
        this.regisData.phone = this.UserData.phone
        this.regisData.email = this.UserData.email
        this.regisData.shipping_address = this.UserData.shipping_address
        this.regisData.shipping_neighborhood = this.UserData.shipping_neighborhood
        
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
        async actualizarPerfilpassword() {
            if (this.newPassword === this.confirmPassword) {
                const data = {
                    user_id: this.regisData.user_id,
                    user_pass: this.confirmPassword,
                }
                console.log(data)
                const result = await this.$store.dispatch('updateUser', data)
                if (result) {
                    this.$refs.notification.showNotification('Usuario Actualizado Correctamente', '#0aa90d')
                    setTimeout(() => {
                        window.location.reload()
                    }, 100);
                }

                console.log('Contraseña actualizada');
            } else {
                this.$refs.notification.showNotification('Las contraseñas no coinciden', '#D11D23')
                console.error('Las contraseñas no coinciden');
            }





        },
        async actualizarPerfil() {
            const data = {
                user_id: this.regisData.user_id,
                name: this.regisData.name,
                last_name: this.regisData.last_name,
                phone: this.regisData.phone,
                email: this.regisData.email,
                shipping_address: this.regisData.shipping_address,
                shipping_neighborhood:this.regisData.shipping_neighborhood,
            }
            console.log(data)
            const result = await this.$store.dispatch('updateUser', data)
            if (result) {
                this.$refs.notification.showNotification('Usuario Actualizado Correctamente', '#0aa90d')
                setTimeout(() => {
                    window.location.reload()
                }, 100);
            }
            if (result.error) {
                this.$refs.notification.showNotification('Usuario el ya existe ', '#D11D23')
            }
            if (result.success) {
                this.$router.push('/login');
            }
        }
    },
    computed: {
        users() {
            return this.$store.state.userdata
        },
        configvar() {
            return JSON.parse(this.$GetEncryptedData("configvar"));
        }

    }
}
</script>
