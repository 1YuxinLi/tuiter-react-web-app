import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
        <div class="col-10">
          <div class="position-relative">
            <input class="ps-5 form-control rounded-pill  wd-border-gray" placeholder="Search Tuiter"/>
          </div>
        </div>
        <div class="col-2">
          <i class="fa-solid fa-gear pt-2"></i>
        </div>
      </div>
            <ul class="nav nav-tabs mt-1 mb-1">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            For You
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Trending
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            News
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">
                            Sports
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">
                            Entertainment
                        </a>
                    </li>
                </ul>

                <div class="position-relative pb-2">
                    <img src="../../../images/teslabot.jpg" width="100%"/>
                </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;