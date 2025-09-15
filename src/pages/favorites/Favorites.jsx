import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";
import RecipeItem from "../../components/recipe-item/RecipeItem";


export default function Favorites() {

    const { favoritesList } = useContext(GlobalContext);

    return (
        <div>
            <h1>Favorits</h1>
            <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">

                {
                    favoritesList && favoritesList.length > 0
                        ? favoritesList.map((item) => <RecipeItem item={item} />)
                        : <div>
                            <p className="lg:text-4xl text-xl text-center">Nothing is added in favorites.</p>
                        </div>
                }
            </div>
        </div>
    );
}