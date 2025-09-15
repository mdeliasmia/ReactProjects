import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";
import RecipeItem from "../../components/recipe-item/RecipeItem";


export default function Home() {

    const { loading, recipeList } = useContext(GlobalContext);

    // if (loading) return <div>Loading... Please Wait</div>

    return (
        <div>
            <h1>Home</h1>
            {
                loading
                    ? <div>Loading... Please Wait</div>
                    : <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">

                        {
                            recipeList && recipeList.length > 0
                                ? recipeList.map((item) => <RecipeItem item={item} />)
                                : <div>
                                    <p className="lg:text-4xl text-xl text-center">Nothing To Show. Please search something</p>
                                </div>
                        }
                    </div>
            }


        </div>
    );
}