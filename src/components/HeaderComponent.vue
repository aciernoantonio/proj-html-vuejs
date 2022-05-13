<template>
    <header>

        <div class="top_header py-3">
            <div class="container">
                <div class="row justify-content-between align-items-center">

                    <div class="col open-hour">
                        <font-awesome-icon class="me-1" icon="fa-solid fa-clock" />
                        Open Hours: Mon - Sat - 9:00 - 18:00
                    </div>
                    <!-- /.open-hour -->

                    <div class="col contacts d-flex">

                        <div class="phone_number me-5">
                            <font-awesome-icon class="me-1" icon="fa-solid fa-phone" />
                            +1 (305) 1234-5678
                        </div>
                        <!-- /.phone_number -->

                        <div class="mail me-5">
                            <font-awesome-icon class="me-1" icon="fa-solid fa-envelope" />
                            hello@example.com
                        </div>
                        <!-- /.mail -->

                        <div class="social">
                            <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            <font-awesome-icon class="mx-5" icon="fa-brands fa-twitter" />
                            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                        </div>
                        <!-- /.social -->
                        

                    </div>
                    <!-- /.contacts -->
                </div>
            </div>
        </div>
        <!-- /.top_header -->

        <div class="header_bg">
            <nav class="navbar">



            </nav>
            <!-- /.navbar -->
        </div>

        

        

    </header>
</template>

<style lang="scss" scoped>

header{
    background-color: #21333E;
    color: #BEC3D0;

    .top_header{
        height: 56px;
    }

    .header_bg{
        height: calc(100vh - 56px);
        background-image: url("@/assets/img/hero-image.png");
        background-size: cover;
        background-position: center;
    }
}

</style>