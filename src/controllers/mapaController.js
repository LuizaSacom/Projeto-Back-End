import mapa from "../models/Mapa.js";

class MapaController{ 
    static async listarMapas (req, res) { //asyns se conecta com o banco
        try{
            const listarMapas = await mapa.find({}); //vai encontrar todos pois não passou parametro
            res.status(200).json(listarMapas);
        }catch (erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`});
        }
    }

  static async listarMapaPorId (req, res) {
      try{
          const id = req.params.id;
          const mapaEncontrado = await mapa.findById(id); //vai encontrar todos pois não passou parametro
          res.status(200).json(mapaEncontrado);
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na requisição do mapa`});
      }
  };

  static async cadastrarMapa (req, res) {
      try{
          const novoMapa = await mapa.create(req.body);   //passa a criar
          res.status(201).json({ message: "Criado com sucesso!", mapa: novoMapa });
      }catch (erro){
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar mapa`});
      }
  };

  static async atualizarMapa (req, res) {
      try{
          const id = req.params.id;
          await mapa.findByIdAndUpdate(id, req.body);
          res.status(200).json({message: "Mapa atualizado!"});
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na atualização do mapa`});
      }
  };
  
  static async excluirMapa (req, res) {
      try{
          const id = req.params.id;
          await mapa.findByIdAndDelete(id);
          res.status(200).json({message: "Mapa excluido!"});
      }catch (erro){
          res.status(500).json({message: `${erro.message} - falha na exclusão do mapa`});
      }
  };
};

export default MapaController;