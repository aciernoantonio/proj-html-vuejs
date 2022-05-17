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

                    <div class="col contacts d-flex justify-content-between">

                        <div class="phone_number ms-5">
                            <font-awesome-icon class="me-1" icon="fa-solid fa-phone" />
                            +1 (305) 1234-5678
                        </div>
                        <!-- /.phone_number -->

                        <div class="mail ms-1">
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

        <div class="bottom_header header_bg">
            <nav class="navbar pt-4">

                <div class="container">
                    <div class="row justify-content-between align-items-center">

                        <div class="col">
                            <div class="logo d-flex align-items-center justify-content-start">
                                <span class="logo green py-2 ps-4 pe-1">NEX</span> GEN
                            </div> 
                        </div>
                        
                        <div class="col d-flex align-items-center">
                            <div class="links d-flex mx-3" v-for="(link, index) in linkList" :key="index">
                                <a href="#">{{link.text}}</a>
                            </div>  
                            <a class="btn btn-success ms-3 py-2" href="#">GET IN TOUCH</a>
                        </div>
                        
                        
                    </div>
                </div>

                

            </nav>
            <!-- /.navbar -->

            <div class="jumbotron d-flex flex-column justify-content-center align-items-center pt-5">
                <h1 class="display-4">Lead~ Customer</h1>
                <p class="lead my-3">
                    Successful strategies require data analysis, creativity and customer focus, taking
                    advantage of the latest thecnologies to offer excellent services.
                </p>

                <div class="d-flex mt-4">

                    <a class="btn btn-success me-4 py-2" href="#" role="button">GET IN TOUCH</a>
                    <a class="btn btn-empty btn-primary py-2" href="#" role="button">READ MORE</a>

                </div>

                
            </div>
            <!-- /.jumbotron -->

        </div>
        <!-- /.bottom_header -->
        

    </header>
</template>

<script>

export default {
    name: "HeaderComponent",
    components: {
    },

    data(){
        return{
            linkList: [
                {
                    text: "HOME"
                },
                {
                    text: "ABOUT"
                },
                {
                    text: "SERVICES"
                },
                {
                    text: "PRICING"
                },
                {
                    text: "BLOG"
                },

            ]
        }
    }
}
    
</script>

<style lang="scss" scoped>

header{

    color: #ffffff;;
    
    .top_header{
        height: 56px;
        background-color: #21333E;
        color: #BEC3D0;
    }

    .header_bg{
        height: calc(75vh - 56px);
        background-image: url("@/assets/img/hero-image.png");
        background-size: cover;
        background-position: bottom;
        position: relative;
        z-index: 1;
    }

    .header_bg::before{
        position: absolute;
        z-index: -1;
        content: "";
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0, 60%);
    }

    .container{
        display: block;
    }

    .logo{
        font-size: 30px;
        font-weight: 600;
        color: #BEC3D0;
    }

    .green{
        color: rgb(1, 165, 165);
        background-color: rgba(1,165,165, 30%);
        border-radius: 50px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    a{
        text-decoration: none;
        color: white;
        font-weight: 600;
    }

    .btn{
        background-color: rgb(1, 165, 165);
    }

    .jumbotron{
        h1{
            font-weight: 900;
        }

        p{
            width: 50%;
            font-size: 18px;
            text-align: center;
            color: #BEC3D0;
        }

        .btn-empty{
            background-color: transparent;
            border: 1px solid rgb(1, 165, 165);;
        }
    }
   
}

</style>