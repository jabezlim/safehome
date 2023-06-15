<link rel="stylesheet" href="stylesheet/certificate.css">
<!-- Background -->
<div id="bg_div">
    <img src="images/certificatespage/certificate_bg.gif" id="certificate_bg" />
    <img src="images/certificatespage/certificate_title.png" id="certificate_title" />
</div>
<div class="main-divs" id="certificatesApp">
    <!-- Left Side certificates -->
    <div class="left-div">
        <div class="left-div-inner">
            <div class="left-div-header-div">
                <span id="certificate-types-header">Certificates</span>
            </div>
            <div class="left-div-table">
                <!-- certificate Types -->
                <ul>
                    <li v-for="item in certificates">{{ item.name }}</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Right Side Items -->
    <div class="right-div">
        <div>

        </div>
    </div>
</div>
<script src="js/certificate.js"></script>