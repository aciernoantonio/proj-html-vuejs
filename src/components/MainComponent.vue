<template>
    <main>
        <div class="strong_points">

            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col human_capital">
                        <div class="card p-3 border-0">
                            <div class="card-body d-flex flex-column align-items-start">
                                <div class="icon mb-3"><font-awesome-icon icon="fa-solid fa-user-group" /></div>
                                <h5 class="card-title">Human Capital</h5>
                                <h6 class="card-subtitle my-2 text-muted">Humanizing business Harness the power of technology to improve the way people work</h6>
                            </div>
                        </div>
                    </div>
                     <!-- /.human_capital -->

                     <div class="col core_business">
                        <div class="card p-3 border-0">
                            <div class="card-body d-flex flex-column align-items-start">
                                <div class="icon mb-3"><font-awesome-icon icon="fa-solid fa-chart-pie" /></div>
                                <h5 class="card-title">Core Business</h5>
                                <h6 class="card-subtitle my-2 text-muted">It takes innovative approaches to trasnform, modernize, and run existing playforms.</h6>
                            </div>
                        </div>
                    </div>
                     <!-- /.core_business -->

                     <div class="col performance">
                        <div class="card p-3 border-0">
                            <div class="card-body d-flex flex-column align-items-start">
                                <div class="icon mb-3"><font-awesome-icon icon="fa-solid fa-gauge-high" /></div>
                                <h5 class="card-title">Human Capital</h5>
                                <h6 class="card-subtitle my-2 text-muted">Achieving maximum impact and value from investi,emts in finance and supply chain.</h6>
                            </div>
                        </div>
                    </div>
                     <!-- /.performance -->


                </div>
            </div>

        </div>
        <!-- /.strong_points -->

        <div class="company">

            <div class="d-flex justify-content-center align-items-center">

                <div class="col about">

                    <div class="rightText">
                        <div class="network">ABOUT THE NETWORK</div>
                        <div class="company mt-4">
                            <span class="marked rounded-3">The</span> Company
                        </div>
                        <div class="subtext text-muted my-4">
                            For 12 years we have benn providing audit and warranty, financial advice, risk advice, taxes and related services to select clients.
                        </div>


                        <div class="row">
                            <div class="col-6 mt-4">
                                <h6 class="company_title mb-3"><font-awesome-icon class="icon me-1" icon="fa-solid fa-medal"/>Tradition</h6>
                                <div class="subtext text-muted mb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>

                            <div class="col-6 mt-4">
                                <h6 class="company_title mb-3"><font-awesome-icon class="icon me-1" icon="fa-solid fa-lock"/>Security</h6>
                                <div class="subtext text-muted mb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>

                            <div class="col-6 mt-4">
                                <h6 class="company_title mb-3"><font-awesome-icon class="icon me-1" icon="fa-solid fa-file-pen"/>Certificate</h6>
                                <div class="subtext text-muted mb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>

                            <div class="col-6 mt-4">
                                <h6 class="company_title mb-3"><font-awesome-icon class="icon me-1" icon="fa-solid fa-graduation-cap"/>Expertise</h6>
                                <div class="subtext text-muted mb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>

                    </div>
 
                </div>
                <!-- /.about -->

                <div class="col">
                    <img src="@/assets/img/news-4.jpg" alt="">
                </div>

            </div>

        </div>
        <!-- /.company -->

    </main>
</template>

<style lang="scss" scoped>

main{

    .icon{
        color: #328486;
    }

    .strong_points{
        background-color: #E8F9E5;
        padding: 8rem 0;

        .container{
            width: 800px;
            margin: auto;
        }

        .icon{
            
            background-color: #DAECED;
            border-radius: 50%;
            padding: 0.70rem 0.80rem;
        }

        h5{
            font-weight: 600;
        }

        .performance{
            .icon{
                padding: 0.70rem 0.85rem;
            }
        }
    }

    .company{
        img{
            height: 568px;
            width: 100%;
            object-fit: cover;
        }

    }

    .about{

        .network{
            font-size: 12px;
            color: #0CA6B0;
            font-weight: 600;
        }

        .company{
            font-weight: bold;
            font-size: 35px;
        }

        .marked{
            color: #058283;
            background-color: #DAECED;
            padding: 0.75rem 1rem;
        }

        .rightText{
            margin-left: 300px;
        }

        .subtext{
            font-size: 12px;
        }

        .company_title{
            font-weight: 700;
        }

    }
}

</style>