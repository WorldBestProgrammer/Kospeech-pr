Search.setIndex({docnames:["Data_loader","Evaluator","Feature","Loss","Model","Modules","Trainer","index","notes/Data-Analysis","notes/Preparation","notes/intro"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["Data_loader.rst","Evaluator.rst","Feature.rst","Loss.rst","Model.rst","Modules.rst","Trainer.rst","index.rst","notes\\Data-Analysis.md","notes\\Preparation.md","notes\\intro.md"],objects:{"e2e.data_loader":{data_loader:[0,0,0,"-"],label_loader:[0,0,0,"-"]},"e2e.data_loader.data_loader":{AudioDataLoader:[0,1,1,""],MultiDataLoader:[0,1,1,""],SpectrogramDataset:[0,1,1,""],load_data_list:[0,3,1,""],load_pickle:[0,3,1,""],split_dataset:[0,3,1,""]},"e2e.data_loader.data_loader.AudioDataLoader":{run:[0,2,1,""]},"e2e.data_loader.data_loader.MultiDataLoader":{join:[0,2,1,""],start:[0,2,1,""]},"e2e.data_loader.data_loader.SpectrogramDataset":{augmentation:[0,2,1,""],get_item:[0,2,1,""],parse_script:[0,2,1,""],shuffle:[0,2,1,""]},"e2e.data_loader.label_loader":{load_label:[0,3,1,""],load_targets:[0,3,1,""]},"e2e.evaluator":{evaluator:[1,0,0,"-"]},"e2e.evaluator.evaluator":{Evaluator:[1,1,1,""]},"e2e.evaluator.evaluator.Evaluator":{evaluate:[1,2,1,""],predict:[1,2,1,""]},"e2e.feature":{core:[2,0,0,"-"],parser:[2,0,0,"-"]},"e2e.feature.core":{split:[2,3,1,""]},"e2e.feature.parser":{AudioParser:[2,1,1,""],SpectrogramParser:[2,1,1,""]},"e2e.feature.parser.AudioParser":{load_audio:[2,4,1,""],spec_augment:[2,4,1,""]},"e2e.feature.parser.SpectrogramParser":{parse_audio:[2,2,1,""]},"e2e.loss":{loss:[3,0,0,"-"]},"e2e.loss.loss":{LabelSmoothingLoss:[3,1,1,""]},"e2e.loss.loss.LabelSmoothingLoss":{forward:[3,2,1,""]},"e2e.model":{attention:[4,0,0,"-"],las:[4,0,0,"-"],listener:[4,0,0,"-"],speller:[4,0,0,"-"],topk_decoder:[4,0,0,"-"]},"e2e.model.attention":{MultiHybridAttention:[4,1,1,""],ScaledDotProductAttention:[4,1,1,""]},"e2e.model.attention.MultiHybridAttention":{forward:[4,2,1,""]},"e2e.model.attention.ScaledDotProductAttention":{forward:[4,2,1,""]},"e2e.model.las":{ListenAttendSpell:[4,1,1,""]},"e2e.model.las.ListenAttendSpell":{forward:[4,2,1,""]},"e2e.model.listener":{Listener:[4,1,1,""],MaskCNN:[4,1,1,""]},"e2e.model.listener.Listener":{forward:[4,2,1,""]},"e2e.model.listener.MaskCNN":{forward:[4,2,1,""],get_seq_lengths:[4,2,1,""]},"e2e.model.speller":{Speller:[4,1,1,""]},"e2e.model.speller.Speller":{forward:[4,2,1,""],validate_args:[4,2,1,""]},"e2e.model.topk_decoder":{TopKDecoder:[4,1,1,""]},"e2e.model.topk_decoder.TopKDecoder":{forward:[4,2,1,""]},"e2e.modules":{checkpoint:[5,0,0,"-"],global_var:[5,0,0,"-"],logger:[5,0,0,"-"],model_builder:[5,0,0,"-"],opts:[5,0,0,"-"],utils:[5,0,0,"-"]},"e2e.modules.checkpoint":{Checkpoint:[5,1,1,""]},"e2e.modules.checkpoint.Checkpoint":{get_latest_checkpoint:[5,2,1,""],load:[5,2,1,""],save:[5,2,1,""]},"e2e.modules.logger":{Logger:[5,1,1,""]},"e2e.modules.logger.Logger":{debug:[5,2,1,""],info:[5,2,1,""]},"e2e.modules.model_builder":{build_las:[5,3,1,""],build_listener:[5,3,1,""],build_model:[5,3,1,""],build_speller:[5,3,1,""],load_test_model:[5,3,1,""]},"e2e.modules.opts":{inference_opts:[5,3,1,""],model_opts:[5,3,1,""],preprocess_opts:[5,3,1,""],print_inference_opts:[5,3,1,""],print_model_opts:[5,3,1,""],print_opts:[5,3,1,""],print_preprocess_opts:[5,3,1,""],print_train_opts:[5,3,1,""],train_opts:[5,3,1,""]},"e2e.modules.utils":{char_distance:[5,3,1,""],check_envirionment:[5,3,1,""],get_distance:[5,3,1,""],get_lr:[5,3,1,""],label_to_string:[5,3,1,""],set_lr:[5,3,1,""]},"e2e.trainer":{supervised_trainer:[6,0,0,"-"]},"e2e.trainer.supervised_trainer":{SupervisedTrainer:[6,1,1,""]},"e2e.trainer.supervised_trainer.SupervisedTrainer":{train:[6,2,1,""],train_epoches:[6,2,1,""],validate:[6,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:staticmethod"},terms:{"000\uac1c\uc529\uc758":9,"000\uc2dc\uac04":9,"000\uc5ec\uba85\uc774":9,"092\uac1c\uc774\ubbc0\ub85c":8,"1000h":10,"123gb\ub85c":9,"124\uac1c\uc758":9,"1\ubc88\ub9cc":9,"1\ubc88\ubd80\ud130":9,"1\ubc88\uc529":9,"20\uc2dc\uac04\uc744":9,"20h":9,"28607\uac1c\ub85c":8,"2\uac1c\uc758":8,"300\uac1c":9,"300\uc5ec\uac1c\uc758":9,"30db":2,"3\uac1c\uc758":9,"3\ud559\ub144":9,"4\uac1c\uc758":9,"5\uac1c\uc758":9,"607\uac1c\uc758":8,"60\ub9cc\uac1c\uc758":8,"622545\ubc88\uae4c\uc9c0":9,"8\uac1c\uc758":9,"980\uc2dc\uac04\uc744":9,"980h":9,"\uac00":9,"\uac00\uaca9\uc5d0":8,"\uac00\ub2a5\ud558\uace0":9,"\uac00\ub2a5\ud558\ubbc0\ub85c":9,"\uac00\uc11c":8,"\uac00\uc131\ube44\uac00":8,"\uac00\uc838\uc640\uc8fc\ub294":9,"\uac00\uc9c0":9,"\uac01":9,"\uac01\uac01\uc758":8,"\uac04\ud22c\uc5b4":9,"\uac10\uc0ac\ud558\uaca0\uc2b5\ub2c8\ub2e4":9,"\uac17":9,"\uac19\ub2e4":9,"\uac19\uc740":[8,9],"\uac19\uc774":9,"\uac1c\uc218\ub294":9,"\uac1c\uc218\ub97c":8,"\uac1c\uc218\uc758":9,"\uac1c\uc758":9,"\uac70\uae30":8,"\uac70\ucce4\ub2e4":9,"\uac74\uac00":9,"\uac81\ub098":8,"\uac83\uc740":8,"\uac83\uc744":[8,9],"\uac83\uc774":9,"\uac83\uc774\uae30":9,"\uac83\uc774\ub2e4":9,"\uac83\uc774\ub77c\uace0":9,"\uac83\uc785\ub2c8\ub2e4":8,"\uacb0\uacfc":[8,9],"\uacb0\uacfc\ub97c":8,"\uacb0\uc815\ud588\uc2b5\ub2c8\ub2e4":8,"\uacbd\ub85c\ub97c":9,"\uacc4\uc0b0\ud574\uc8fc\uace0":9,"\uacc4\uc18d":8,"\uace0\ubbfc\ud588\ub2e4":9,"\uacfc\uc815\uc744":9,"\uad00\ub828":8,"\uad00\uc2ec\uc788\uc5c8\ub358":8,"\uad1e":9,"\uad6c\ubd84\ud574\uc8fc\uc5c8\ub2e4":9,"\uad6c\uc131\ub418\uc5b4":9,"\uad6c\uc131\ud588\ub2e4":9,"\uad6d\uac00\uc7a5\ud559\uae08":9,"\uadf8":[8,9],"\uadf8\ub798":8,"\uadf8\ub798\uc11c":9,"\uadf8\ub7ec\uae30":9,"\uadf8\ub7fc":9,"\uadf8\ub824\ubd24\uc2b5\ub2c8\ub2e4":8,"\uadf8\ub9ac\uace0":[8,9],"\uadfc\ub370":[8,9],"\uae00\uc740":9,"\uae00\uc785\ub2c8\ub2e4":9,"\uae00\uc790\ub97c":8,"\uae03":9,"\uae30\ub85d\ud55c":9,"\uae30\ubcf8":9,"\uae30\ubcf8\uc801\uc73c\ub85c":9,"\uae30\uc874":[8,9],"\uae30\uc900\uc73c\ub85c":8,"\uae38\uc774\uac00":8,"\uae38\uc774\ub97c":8,"\uae4c\uc9c0\ub294":9,"\uae4c\uc9c0\uc758":9,"\ub05d\ub0b4\uba74":9,"\ub098\ub234\uc2b5\ub2c8\ub2e4":8,"\ub098\ub3c4":8,"\ub098\uba38\uc9c0":9,"\ub0a8\uac8c\ub418\ub294\ub370":9,"\ub0b4\uc6a9\uc744":8,"\ub108\ubb34":8,"\ub118\uc5b4\uac00\ub294":8,"\ub123\uc5b4\uc900\ub2e4":9,"\ub123\uc5c8\uc73c\ubbc0\ub85c":9,"\ub178\uc774\uc988":9,"\ub178\uc774\uc988\uac00":9,"\ub180":8,"\ub294":9,"\ub2e4\ub154\ub358":9,"\ub2e4\ub8e8\uae30":8,"\ub2e4\uc2dc":9,"\ub2e4\uc6b4\ub85c\ub4dc":9,"\ub2e4\uc6b4\ubc1b\uc544\uc11c":8,"\ub2e4\uc74c":[8,9],"\ub2e4\uc74c\uacfc":[8,9],"\ub2e4\uc74c\uc73c\ub85c":[8,9],"\ub2e4\uc74c\uc740":9,"\ub2e8\uc704\ub85c":9,"\ub300\ud558\uc5ec":9,"\ub300\ud55c":9,"\ub300\ud574":9,"\ub354\ub4ec\ub294":9,"\ub370\uc774\ud130":[8,9],"\ub370\uc774\ud130\ub294":[8,9],"\ub370\uc774\ud130\ub85c":[8,9],"\ub370\uc774\ud130\ub97c":8,"\ub370\uc774\ud130\uc14b\uc5d0":9,"\ub370\uc774\ud130\uc14b\uc5d0\uc11c":9,"\ub370\uc774\ud130\uc14b\uc758":9,"\ub370\uc774\ud130\uc14b\uc774":9,"\ub370\uc774\ud130\uc758":8,"\ub3c4\uc911":8,"\ub418\uac8c":8,"\ub418\ub294":9,"\ub418\uba74":9,"\ub418\uc5b4":9,"\ub418\uc5b4\uc788\ub358":8,"\ub418\uc5c8\ub2e4":9,"\ub418\uc5c8\uc744":8,"\ub41c":8,"\ub41c\ub2e4":9,"\ub420":9,"\ub450":9,"\ub454":9,"\ub458\uc774":8,"\ub458\uc774\ub9cc":8,"\ub4a4":9,"\ub4e4\uc5b4\ubcf4\uac8c":9,"\ub4f1":9,"\ub4f1\uc744":9,"\ub4f1\uc758":9,"\ub4f1\uc7a5\ud558\ub294":9,"\ub4f1\uc7a5\ud55c":9,"\ub4f1\uc7a5\ud588\uace0":9,"\ub515\uc154\ub108\ub9ac":9,"\ub54c":9,"\ub54c\ubb38\uc5d0":[8,9],"\ub744\uc5b4\uc4f0\uae30\ub294":9,"\ub744\uc5b4\uc4f0\uae30\ub85c":9,"\ub79c\ub364\ud558\uac8c":9,"\ub808\uc774\ube14":9,"\ub808\uc774\ube14\ub85c":9,"\ub808\uc774\ube14\ub85c\uc758":9,"\ub808\uc774\ube14\ub9c1":9,"\ub808\uc774\ube14\uc740":9,"\ub808\uc774\ube14\uc744":9,"\ub808\uc774\ube14\uc774":[8,9],"\ub85c":9,"\ub85c\ub4dc\ud558\uaca0\uc2b5\ub2c8\ub2e4":8,"\ub85c\ub529\ud558\uc9c0\ub9cc":8,"\ub97c":9,"\ub9ac\uc2a4\ud2b8":9,"\ub9ac\uc2a4\ud2b8\ub85c":8,"\ub9ac\uc2a4\ud2b8\ub97c":9,"\ub9ac\uc2a4\ud2b8\uc5d0":[8,9],"\ub9c1\ud06c":9,"\ub9c1\ud06c\uc5d0\uc11c":9,"\ub9c8\uc9c0\ub9c9\uc5d0":9,"\ub9c8\ucce4\ub2e4":9,"\ub9cc\ub0ac\uc5c8\uc5b4":8,"\ub9cc\ub4dc\ub294":9,"\ub9cc\ub4e0":9,"\ub9cc\ub4e0\ub2e4":9,"\ub9cc\ub4e4\uace0":8,"\ub9cc\ub4e4\uc5b4":9,"\ub9cc\ub4e4\uc5b4\ub454":9,"\ub9cc\ub4e4\uc5b4\ubcf4\uc790":9,"\ub9cc\ub4e4\uc5b4\uc11c":8,"\ub9cc\ub4e4\uc5b4\uc900\ub2e4":9,"\ub9ce\ub2e4\uace0":8,"\ub9de\ucdb0\uc8fc\uae30":9,"\ub9de\ucdb0\uc8fc\ub294":9,"\ub9e4":8,"\uba3c\uc800":[8,9],"\uba54\uc11c\ub4dc\ub85c":9,"\ubaa8":9,"\ubaa8\ub450":9,"\ubaa8\ub4e0":9,"\ubaa8\uc544\uc11c":9,"\ubaa9\ud45c\uc600\uae30\uc5d0":9,"\ubaac":9,"\ubb38\uc758\uc0ac\ud56d":9,"\ubb38\uc790":9,"\ubb38\uc790\uac00":9,"\ubb38\uc790\ub294":9,"\ubb38\uc790\ub4e4\ub85c":9,"\ubb38\uc790\ub4e4\ub9cc":9,"\ubb38\uc790\ub4e4\uc740":9,"\ubb38\uc790\ub4e4\uc774":9,"\ubb38\uc790\ub85c":9,"\ubb38\uc790\ub85c\ub9cc":9,"\ubb38\uc790\ub97c":9,"\ubb38\uc790\uc5d0":9,"\ubb38\uc7a5":9,"\ubb38\uc7a5\uc744":9,"\ubb38\uc81c\uac00":9,"\ubbf8\ub9ac":[8,9],"\ubc0f":9,"\ubc14":9,"\ubc14\uafb8\uc5b4":9,"\ubc14\uafd4\ubcf4\uc790":9,"\ubc14\uafd4\uc8fc\uae30\uac00":9,"\ubc14\uafd4\uc8fc\ub824":9,"\ubc14\uafd4\uc8fc\uc5c8\ub2e4":9,"\ubc14\ud0d5\uc73c\ub85c":8,"\ubc18\ud658\ud588\ub2e4":9,"\ubc1b\uc544":9,"\ubc1b\uc73c\uba74\uc11c":9,"\ubc1c\uc0dd\ud558\uc5ec":8,"\ubc1c\uc131\ud55c":9,"\ubc1c\uc74c\uc73c\ub85c":9,"\ubc1c\uc74c\uc774":9,"\ubc1c\uc74c\uc804\uc0ac":9,"\ubc1c\uc74c\uc804\uc0ac\ub97c":9,"\ubc30\uc6cc\ubd24\uc5b4":9,"\ubc31":9,"\ubc88":8,"\ubc88\ud638\ub294":9,"\ubc88\ud638\ub97c":9,"\ubc8c\ub2e4":9,"\ubc8c\uba74":9,"\ubcc0\uc218\ub97c":9,"\ubcc0\ud658":9,"\ubcc0\ud658\uae4c\uc9c0":9,"\ubcc0\ud658\ub418\uc5c8\ub294\uc9c0":9,"\ubcc0\ud658\ub41c":9,"\ubcc0\ud658\uc744":9,"\ubcc0\ud658\uc774":8,"\ubcc0\ud658\ud574\ubcf4\uc790":9,"\ubcc0\ud658\ud574\uc8fc\uae30\ub9cc":9,"\ubcc0\ud658\ud574\uc8fc\ub294":9,"\ubcc0\ud658\ud588\ub2e4":9,"\ubcf4\uaca0\uc2b5\ub2c8\ub2e4":8,"\ubcf4\ub290\ub77c":8,"\ubcf4\uc2e4":8,"\ubcf4\uc558\uc2b5\ub2c8\ub2e4":8,"\ubcf4\uc774\uae34":9,"\ubcf8":9,"\ubd80\ud638\ub294":9,"\ubd80\ud638\ub77c\uace0":9,"\ubd84\uc11d":8,"\ubd84\uc11d\uc744":8,"\ubd84\uc11d\ud558\uae30":8,"\ubd84\uc11d\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4":8,"\ubd88\ub7ec\uc624\uace0":9,"\ubd99\ub294":9,"\ube61\uc140\uac78":9,"\ube68\ub9ac":8,"\ubfd0\ub354\ub7ec":9,"\uc0ac\uc2ed":9,"\uc0ac\uc6a9":9,"\uc0ac\uc6a9\ub41c":9,"\uc0ac\uc6a9\ud558\uace0":9,"\uc0ac\uc6a9\ud55c":9,"\uc0ac\uc6a9\ud560":9,"\uc0ad\uc81c":9,"\uc0bc":9,"\uc0bd\uc785\ud569\ub2c8\ub2e4":8,"\uc0c1\ub2f9\ud788":9,"\uc0c8\ub85c\uc6b4":8,"\uc0dd\uac01\ud558\uc5ec":9,"\uc0dd\uac01\ud588\uace0":9,"\uc0dd\uae38":9,"\uc0dd\uc18c\ud55c":9,"\uc0fe":9,"\uc11e\uc5b4\uc8fc\uae30":9,"\uc11e\uc5b4\uc900\ub2e4":9,"\uc11e\uc5ec\uc9c4":9,"\uc120\uc218\uac00":8,"\uc120\uc218\ub97c":8,"\uc120\ud0dd\ud558\uae30":9,"\uc131\uacf5\uc801\uc73c\ub85c":8,"\uc138\ubc00\ud558\uac8c":9,"\uc18c\ub9ac":9,"\uc18c\ub9ac\uc57c":9,"\uc218":[8,9],"\uc218\ub294":8,"\uc218\ub3d9\uc73c\ub85c":9,"\uc218\uc791\uc5c5\uc73c\ub85c":9,"\uc21c\uc11c\ub300\ub85c":9,"\uc21c\uc11c\ub85c":9,"\uc21c\uc11c\ub97c":9,"\uc22b\uc790":9,"\uc22b\uc790\ub07c\ub9ac\ub294":9,"\uc22b\uc790\ub808\uc774\ube14\ub85c":9,"\uc22b\uc790\ub808\uc774\ube14\uc5d0\uc11c":9,"\uc22b\uc790\ub85c":[8,9],"\uc22b\uc790\ub97c":9,"\uc27d\uac8c":8,"\uc2dc\uac04\uc744":8,"\uc2dc\uc791\ub418\uba74":8,"\uc2dc\ud000\uc2a4":8,"\uc2dc\ud0ac":9,"\uc2dc\ud0ac\uc218\uac00":9,"\uc2e0\uccad":9,"\uc2e0\ud638\ub85c\ubd80\ud130":9,"\uc2e4\uc81c\ub85c":9,"\uc2e4\ud589\ub410\ub2e4\uba74":8,"\uc2e4\ud589\uc2dc\ucf1c\uc11c":9,"\uc2ed":9,"\uc2fc":8,"\uc544":9,"\uc544\ub798\ubd80\ud130":9,"\uc544\uc608":9,"\uc544\uc6c3\ub77c\uc774\uc5b4\ub85c":8,"\uc548\uc5d0":9,"\uc548\uc5d0\ub294":9,"\uc54a\uc558\ub2e4":9,"\uc54a\uc744":9,"\uc560\ub9e4\ud588\ub2e4":9,"\uc57d":[8,9],"\uc5b4":8,"\uc5b4\ub5a0\ud55c":9,"\uc5b4\ub835\ub2e4\uace0":9,"\uc5b8\uae09\ub41c":9,"\uc5c4\uccad\ub098\uac8c":8,"\uc5c6\uc5b4\uc11c":9,"\uc5c6\uc5c8\uc5b4":8,"\uc5c6\uc73c\ubbc0\ub85c":9,"\uc5d0":9,"\uc5d0\ub7ec":9,"\uc5d0\ub7ec\uac00":8,"\uc5d0\uc11c":[8,9],"\uc5ec\ub7ec":8,"\uc5f0\ub77d\uc8fc\uc2dc\uba74":9,"\uc608\uce21":9,"\uc608\uce21\ud558\uae30":9,"\uc624\uace0":8,"\uc624\ub514\uc624":9,"\uc640":9,"\uc644\uc131\ub418\uc5c8\ub2e4":9,"\uc644\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4":8,"\uc6b0\ub9ac":9,"\uc6b0\ub9ac\uac00":9,"\uc6b0\ub9ac\ub294":9,"\uc6b0\ub9ac\ub3c4":8,"\uc6d0\ub798":8,"\uc6d0\ud558\ub294":9,"\uc704":9,"\uc704\uc5d0\uc11c":9,"\uc704\uc640":9,"\uc704\uc758":[8,9],"\uc704\ud558\uc5ec":9,"\uc704\ud55c":9,"\uc704\ud574":[8,9],"\uc704\ud574\uc11c":9,"\uc73c\ub85c":9,"\uc744":9,"\uc74c\uc131":9,"\uc74c\uc131\ub370\uc774\ud130":9,"\uc74c\uc131\uc2e0\ud638\ub9cc\uc73c\ub85c":9,"\uc74c\uc131\uc5d0":9,"\uc74c\uc131\uc778\uc2dd":9,"\uc758":9,"\uc758\ubbf8\uac00":9,"\uc774":[8,9],"\uc774\uacf3":8,"\uc774\ub54c":9,"\uc774\ub7ec\ud55c":9,"\uc774\ub807\uac8c":9,"\uc774\ub85c\uc368":9,"\uc774\ub8e8\uc5b4\uc838":[8,9],"\uc774\ub8e8\uc5b4\uc9c0\ub294":9,"\uc774\ub8e8\uc5b4\uc9c4":9,"\uc774\ubc31":9,"\uc774\uc0c1":9,"\uc774\uc0c1\uc778":8,"\uc774\uc5d0":9,"\uc774\uc6a9\ud558\uc5ec":9,"\uc774\uc6a9\ud574\uc11c":9,"\uc774\uc81c":9,"\uc774\ud574\ud560":9,"\uc77c":9,"\uc77c\uc815\ud55c":9,"\uc785\ub825\uc73c\ub85c":9,"\uc788\uac8c":9,"\uc788\uace0":9,"\uc788\ub294":9,"\uc788\ub294\uc9c0\ub97c":9,"\uc788\ub2e4":9,"\uc788\ub3c4\ub85d":9,"\uc788\uc2b5\ub2c8\ub2e4":[8,9],"\uc788\uc5c8\ub2e4":9,"\uc788\uc5c8\uc2b5\ub2c8\ub2e4":8,"\uc790\uc720\uc790\uc7ac\ub85c":9,"\uc791\uc5c5\uc5d0":9,"\uc791\uc5c5\uc740":9,"\uc791\uc5c5\uc758":9,"\uc791\uc5c5\ud588\uc2b5\ub2c8\ub2e4":9,"\uc798":9,"\uc7a1\uc544\uc8fc\ub294":9,"\uc7a1\uc74c":9,"\uc800\uc7a5\uc2dc\ucf1c":8,"\uc800\uc7a5\uc744":8,"\uc800\uc7a5\ud55c\ub2e4":9,"\uc800\uc7a5\ud574\ub480\ub358":8,"\uc800\uc7a5\ud574\uc900\ub2e4":9,"\uc800\ud76c":8,"\uc800\ud76c\uac00":8,"\uc804\ucc98\ub9ac":9,"\uc804\ucc98\ub9ac\ub97c":9,"\uc804\uccb4":9,"\uc815\ub3c4\ub97c":[8,9],"\uc815\ub3c4\uc758":8,"\uc815\uc0c1\uc801\uc73c\ub85c":[8,9],"\uc815\uc2e0\uc774":8,"\uc815\uc758\ud55c":9,"\uc815\uc758\ud574\ub454\ub2e4":9,"\uc815\uc758\ud574\ubcf4\uc790":9,"\uc815\uc758\ud574\uc8fc\uc5c8\ub2e4":9,"\uc815\uc758\ud588\ub2e4":9,"\uc815\uc758\ud588\uc2b5\ub2c8\ub2e4":8,"\uc815\ud655\ud558\uac8c":9,"\uc81c\uac70\ud55c":8,"\uc81c\uac70\ud574\uc900":9,"\uc81c\uacf5\ub418\ub294":9,"\uc81c\uacf5\ub41c":9,"\uc81c\uacf5\ud558\ub294":9,"\uc81c\uc678\ub97c":9,"\uc81c\uc678\ud558\uc600\ub2e4":9,"\uc81c\uc678\ud55c":9,"\uc870\uc6a9\ud55c":9,"\uc885\ub8cc\ub410\ub2e4\uba74":9,"\uc88b\uc544\ud588\uc5c8\uc5b4":8,"\uc8fc\ubaa9\ud588\ub2e4":9,"\uc900":9,"\uc904\uc774\uae30":8,"\uc904\uc77c":8,"\uc911":9,"\uc911\uc694\ud558\uc9c0":9,"\uc911\uc694\ud55c":9,"\uc918\uc57c":9,"\uc9c1\uc811":[8,9],"\uc9c4\ud589\uc744":9,"\uc9c4\ud589\ud558\uae30":9,"\uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4":8,"\ucc28\ub9ac\uba74\uc740":8,"\ucc28\uc9c0\ud588\ub294\ub370":9,"\ucc98\ub9ac":9,"\ucc98\ub9ac\ub97c":9,"\ucca0\uc790\uc804\uc0ac":9,"\ucd1d":9,"\ucd5c\ub300\ud55c":9,"\ucd94\uac00":9,"\ucd94\uac00\ud574":9,"\uce58\ub300\uc796\uc544":8,"\uce60":9,"\uce60\uc2ed":9,"\uce74\uc6b4\ud2b8\ud574":8,"\ucee4":9,"\ucef4\ud4e8\ud130\uac00":9,"\ucf54\ub4dc\uac00":8,"\ucf54\ub4dc\ub97c":9,"\ucf54\ub4dc\uc774\ub2e4":9,"\ud06c\uac8c":9,"\ud0c0\uac9f":9,"\ud0dc\uc2a4\ud06c\uc5d0\uc11c":9,"\ud14c\uc2a4\ud2b8":9,"\ud14c\uc2a4\ud2b8\ub370\uc774\ud130\ub85c":9,"\ud14c\uc2a4\ud2b8\uc6a9":9,"\ud14d\uc2a4\ud2b8":9,"\ud14d\uc2a4\ud2b8\ub294":9,"\ud14d\uc2a4\ud2b8\ub85c":9,"\ud14d\uc2a4\ud2b8\ub85c\ub294":9,"\ud14d\uc2a4\ud2b8\ub85c\uc758":9,"\ud14d\uc2a4\ud2b8\ub97c":9,"\ud14d\uc2a4\ud2b8\uc5d0\uc11c":9,"\ud150\ub370":8,"\ud1b5\ud574\uc11c":9,"\ud2b8\ub808\uc774\ub2dd":9,"\ud2b8\ub808\uc774\ub2dd\uc744":9,"\ud2b9\uc218":9,"\ud2b9\uc218\ubb38\uc790\uac00":9,"\ud2b9\uc218\ubb38\uc790\ub294":9,"\ud300\uc740":[8,9],"\ud30c\uc545\ub429\ub2c8\ub2e4":8,"\ud30c\uc545\ud574\uc57c\ud55c\ub2e4":9,"\ud30c\uc77c":[8,9],"\ud30c\uc77c\uacfc":9,"\ud30c\uc77c\ub4e4\ub85c\ub9cc":9,"\ud30c\uc77c\ub4e4\uc744":[8,9],"\ud30c\uc77c\ub85c":[8,9],"\ud30c\uc77c\uc5d0\uc11c":9,"\ud30c\uc77c\uc740":[8,9],"\ud30c\uc77c\uc744":[8,9],"\ud30c\uc77c\uc758":9,"\ud30c\uc77c\uc774":9,"\ud310\ub2e8\ub418\uc5b4":8,"\ud310\ub2e8\ub429\ub2c8\ub2e4":8,"\ud310\ub2e8\ud55c":8,"\ud328\uc158\uc1fc":8,"\ud37c\uc13c\ud2b8":9,"\ud37c\uc13c\ud2b8\uac00":9,"\ud3b8\uc758\ub97c":9,"\ud3ec\ub9f7\uc5d0":9,"\ud3ec\ub9f7\uc758":9,"\ud3ec\ud568\ub41c":9,"\ud3ec\ud568\ud558\uc5ec":9,"\ud3f4\ub354":9,"\ud3f4\ub354\uac00":9,"\ud3f4\ub354\ub85c":9,"\ud45c\uae30":9,"\ud45c\ucc98\ub7fc":9,"\ud45c\ud604":9,"\ud504\ub85c":9,"\ud53c\ud074":8,"\ud544\uc694\ud55c":9,"\ud544\ud130\ub9c1":9,"\ud544\ud130\ub9c1\ud558\uc9c0":9,"\ud544\ud130\ub9c1\ud574\uc8fc\ub294":9,"\ud558\ub098\uc758":9,"\ud558\ub098\ud558\ub098":9,"\ud558\ub294":9,"\ud558\ub294\ub370":9,"\ud558\uba74":9,"\ud558\uc2e4":9,"\ud559\ub144":9,"\ud559\uc2b5":[8,9],"\ud559\uc2b5\uc2dc\ub9c8\ub2e4":8,"\ud559\uc2b5\uc6a9":9,"\ud559\uc2b5\uc744":9,"\ud559\uc2b5\uc774":8,"\ud55c\uad6d\uc5b4":9,"\ud55c\uae00":9,"\ud55c\uae00\ub85c":[8,9],"\ud55c\ub2e4":9,"\ud55c\ubc88":8,"\ud560":9,"\ud568\uc218":9,"\ud568\uc218\ub4e4\uc744":9,"\ud568\uc218\ub97c":[8,9],"\ud568\uc218\uc774\ub2e4":9,"\ud574\ub2f9":[8,9],"\ud574\ub2f9\ud558\ub294":9,"\ud574\ub480\uc5c8\uc2b5\ub2c8\ub2e4":8,"\ud574\ubc84\ub9ac\uba74":9,"\ud574\ubcf4\uc790":9,"\ud574\uc11c":9,"\ud588\uc9c0\ub9cc":9,"\ud615\uc2dd\uc5d0":9,"\ud615\uc2dd\uc73c\ub85c":[8,9],"\ud615\ud0dc\ub85c":9,"\ud615\ud0dc\ub85c\uc758":9,"\ud655\ub960\uc774\ub77c\ub2c8":9,"\ud655\uc778\uc744":9,"\ud655\uc778\ud558\uace0":9,"\ud655\uc778\ud558\uae30":9,"\ud655\uc778\ud55c":9,"\ud655\uc778\ud560":8,"\ud655\uc778\ud574\ubd24\uc2b5\ub2c8\ub2e4":8,"\ud655\uc778\ud574\uc11c":9,"\ud655\uc778\ud588\ub2e4":9,"\ud658\uacbd\uc5d0\uc11c":9,"\ud658\uc601\ud569\ub2c8\ub2e4":9,"\ud6c4":9,"\ud6c4\uc5d0":9,"\ud6c8\ub828\ub370\uc774\ud130":9,"abstract":2,"b\ub9cc\uc744":9,"break":[8,9],"char":9,"class":[0,1,2,3,4,5,6],"csv\ud30c\uc77c\ub85c":8,"dataset\uc774":8,"default":[0,1,2,4,6,10],"dict\ub85c":9,"dict\ub97c":[8,9],"dict\uc640":9,"dict\uc778":8,"float":[3,4,6],"function":[2,3,4,5,6],"hub\uc5d0\uc11c":9,"id\ub85c":9,"id\ub97c":9,"import":[2,8,9,10],"int":[0,1,2,3,4,5,6,8,9],"labels\uc5d0":9,"lengths\ub77c\ub294":8,"new":[8,10],"num\uc73c\ub85c":9,"outlier\ub85c":8,"outlier\ub97c":8,"outlier\ub9cc\uc744":8,"outlier\uc774\uae30":8,"paths\ub97c":9,"paths\uc640":9,"plot\uc744":8,"return":[0,1,2,3,4,5,6,8,9],"scripts\uc5d0\ub294":8,"static":2,"true":[0,2,4,5,9,10],"while":[3,4],E2E:10,For:10,IDs:4,LAS:[4,5,10],The:[4,5,6,10],These:5,Used:4,Using:[9,10],abov:10,abs:4,acoust:10,act:2,activ:10,actual:4,add:4,affin:10,after:6,afterward:[3,4],aidata:9,aihub:9,aihub_label:9,algirithm:10,algorithm:10,align:[4,10],aligng:4,all:[2,3,4,5],allow:[4,5,10],also:10,although:[3,4],amax:2,analysi:[7,10],ani:10,apach:4,append:[8,9],appli:4,appreci:10,approach:10,architectur:[7,10],architeutur:10,area:2,arg:5,argument:[0,4],argumentpars:0,arrai:8,art:[4,10],arxiv:4,asctim:5,asr:10,attend:[4,10],attent:10,audio:[0,2,9,10],audio_path:[0,2,9],audiodataload:0,audiopars:2,augment:[0,2,10],augment_method:2,author:10,automat:10,avail:5,awar:4,bae:10,base:[4,10],base_path:9,batch:[0,1,4,6,10],batch_first:10,batch_siz:[0,1,4,6,10],batchnorm2d:10,beam:[4,10],becaus:2,becom:4,been:5,befor:[7,10],begin:6,being:5,below:2,benefit:10,between:[5,10],bia:10,bidirect:[4,5,10],bin:8,bit:10,blob:4,bool:[0,2,4,6],box:8,boxplot:8,bracket:9,bug:10,build:[5,10],build_la:5,build_listen:5,build_model:5,build_spel:5,bxcxhx:4,calcul:[3,4,5],call:[3,4,5],can:10,care:[3,4,5],ceil_mod:10,cell:4,cer:6,ch_label:9,chang:4,channel:4,char2id:[0,5,8,9],char_dist:5,char_list:9,charact:[0,4,5,6],charat:5,check:[5,10],check_envirion:5,checkout:10,checkpoint:6,checkpoint_dir_nam:5,checkpoint_everi:[6,10],cheolhwang:10,choos:10,classfic:[3,4],clean_data:8,close:9,cluster:5,cnn:[4,10],code:2,collabor:10,com:[2,3,4,9,10],combin:4,command:10,compil:9,complex:10,compon:10,compris:10,comput:[3,4],conda:10,confid:3,constantli:10,construct:5,contact:10,contain:[4,6,10],content:10,context:4,continu:9,contrast:10,conv1d:10,conv2d:10,convert:[4,5],convolut:[4,10],copi:[3,4,5],copyright:4,core:[0,1,6],corpu:10,correspond:10,cp949:[8,9],cpu:[0,1,4,6],creat:10,criterion:[5,6],csv:[0,8,9,10],cuda:[1,4,5,6,8],current:[5,6,10],custom:[4,10],data1:10,data:[0,5,7,10],data_list:10,data_list_path:[0,10],data_load:[1,5,6,7],data_path:9,datafram:[8,9],dataset:[0,1,5,6],dataset_list:0,dataset_path:[0,10],datset:6,debug:5,decod:[4,10],decoder_output:4,deepspeech:[4,10],def:[8,9],defin:[3,4,5],defulat:4,del_sil:[2,10],delet:[2,10],delimit:8,design:10,determin:1,devic:[1,4,5,6],dict:[0,2,5,8,9],dictionari:[0,2,9],dilat:10,dim:[3,4],dimens:4,diment:[3,4],directli:3,directori:5,discuss:10,disk:5,displai:9,dist:5,distanc:5,distribut:[3,4],doc:10,docstr:10,document:10,dot:4,downstream:10,drawn:4,dropout:[4,10],dropout_p:[4,5],dump:8,dure:[4,5],e2e:[0,1,2,3,4,5,6],each:[4,10],elementwise_affin:10,elif:9,elimin:2,els:9,embed:10,emerg:10,encod:[0,3,4,8,9,10],encoder_output:4,end:[0,2,4,5,9,10],english:10,ensur:4,enumer:9,env:10,envirion:5,environ:10,eos_id:[0,2,4,5,8],eos_token:[5,8],epoch:[5,6],epoch_time_step:6,eps:10,error:6,especi:10,etc:[5,10],evalu:[7,10],everi:[1,3,4],exampl:[4,9,10],except:9,execut:[5,8],exist:5,expect:4,experi:[6,10],extens:10,extract:2,fals:[2,4,6,8,9,10],featur:[4,7],feature_extract_bi:[2,10],feedback:10,feel:10,field:[5,10],filanam:9,file:[0,2,5,10],file_pad:9,filenam:[0,2,5,8,9],filenum:9,filepath:[0,9],filter:[2,9],filter_test_list:10,filter_train_list:10,fix:10,flag:[0,2,9],floattensor:[2,4],fname:9,follow:[5,10],forc:[4,6],format:[5,9],former:[3,4],formula:4,forward:[2,3,4],fragment:2,frame:10,frame_length:2,framework:6,free:10,freq:[2,9],freq_list:9,freq_mask_num:[2,10],freq_mask_para:[2,10],from:[0,2,3,4,5,9],full:5,funcnam:5,gener:10,get:[0,2,5,9],get_dist:5,get_item:0,get_latest_checkpoint:5,get_lr:5,get_seq_length:4,github:[2,3,4,9,10],gitter:10,given:[1,4,6],global:5,gmail:[9,10],gpu:10,greedi:10,ground:[3,5],gru:[4,10],hangeul:5,hardtanh:10,has:[2,3,5,10],have:[2,10],head:[4,8,10],help:6,here:10,hidden:4,hidden_dim:[4,5,10],high_plateau_lr:6,higher:[4,10],hook:[3,4],hop_length:2,how:2,http:[2,3,4,9,10],hub:9,hybrid:[4,10],hyper:2,hyperparamet:10,ibm:[4,10],id2char:[0,5,8,9],id_list:9,identif:[0,2,5],idx:[0,9],ignor:[3,4],ignore_index:3,implement:[5,10],improv:10,in_featur:[4,10],index:[3,4,8,9],indic:[0,2],infer:[4,5],inference_opt:5,info:5,inform:[4,5,10],inherit:2,init_uniform:[5,10],initi:5,inject_nois:2,inplac:10,input:[1,2,3,4,6],input_dropout:10,input_length:[4,6],input_revers:[2,10],input_s:[4,5],input_var:4,instanc:[2,3,4],instancewise_standard:2,instead:[2,3,4],integ:3,integr:10,interest:10,interfac:2,intro:7,introduc:10,inttensor:4,issu:[3,10],job:5,join:0,joint:10,kadi:10,kaispeech:[8,9],kei:8,kernel_s:10,kim:10,kind:10,korean:[9,10],ksponscript:9,ksponscript_001348:9,ksponscript_:9,ksponspeech:[9,10],ksponspeech_:9,label:[0,2,3,5,8,10],label_df:9,label_freq:9,label_list:9,label_path:[0,8],label_smooth:[3,10],label_to_str:[5,8],las:[4,5,10],last:5,later:5,latest:[5,6],latter:[3,4],layer:4,layernorm:10,learn:[5,6],least:5,len:[8,9],length:[2,4,5,8,9],level:4,librari:2,librosa:[2,10],licens:4,like:10,limit:2,linear:10,linear_out:10,linear_q:10,linear_u:10,linear_v:10,lineno:5,list:[0,4,5,6],listen:[5,10],listenattendspel:10,listener_layer_s:10,listener_output:4,littl:10,live:10,load:[0,2,5,8,10],load_audio:2,load_data_list:0,load_label:[0,8,9],load_pickl:0,load_result:0,load_target:0,load_test_model:5,loader:[0,10],local:5,locat:4,log:[5,10],logarithm:3,logit:[3,4],loop:5,loss:[5,6,7],low:[4,10],lr_patienc:10,lr_schedul:[5,6],made:5,mainli:10,major:10,make:[1,2,5],manag:5,mani:2,mask:[2,4],maskcnn:[4,10],maskconv:10,master:[4,9],match:[0,1],matplotlib:8,max_len:[5,10],max_length:4,max_val:10,maximum:4,maxpool2d:10,mean:9,mechan:4,mel:2,memori:8,messag:[0,5],method:[0,2,5,10],mfcc:10,min_lr:10,min_val:10,mit:4,mode:[5,10],model:[1,3,5,6,7],model_nam:5,model_opt:5,modul:[3,4,6,7],modular:10,momentum:10,much:10,multi:[0,4,10],multidataload:0,multihybridattent:[4,10],multipl:10,n_mel:[2,10],name:5,naren:4,natur:10,ndarrai:5,need:[3,4],network:[4,10],neural:[4,10],new_fnam:9,new_sent:9,next:8,nois:[0,9],noise_aug:[0,10],noiseaug:10,none:[1,2,4,8,9],normal:[2,10],note:7,now:10,num_class:[3,4,5],num_epoch:[6,10],num_head:[4,5,10],num_lay:[4,5,10],num_work:[0,1,6,10],number:[0,1,2,3,4,5,6],numpi:[5,8,10],object:5,offer:10,one:[3,4,5,6],onli:10,oom:8,open:[8,9,10],oper:10,opt:0,optim:[5,6,10],option:[0,2,4,5,6,10],org:4,organ:10,other:0,our:[2,10],out:8,out_featur:10,outlier:8,output:[4,8,9,10],output_len:4,over:4,overrid:[0,2],overridden:[3,4],pack:10,packag:[2,7],pad:[4,9,10],pad_token:5,page:10,panda:[8,9,10],paper:[4,10],paradigm:10,paramet:[0,1,2,3,4,5,6],pars:[0,2],parse_audio:2,parse_script:[0,2],parser:[5,10],pass:[3,4,5],path:[0,2,5,8,9],pattern:9,pcm:[2,9],pep:10,perform:[1,3,4,5],pickl:[0,8],pip:10,pipelin:10,pleas:10,plt:8,point:3,possibl:10,pre:5,precondit:5,predict:[1,5,10],prepar:7,preprocess:[5,10],preprocess_opt:5,present:10,prev_align:4,previou:4,previous:5,print:[0,5,6,9],print_everi:[1,6,10],print_inference_opt:5,print_model_opt:5,print_opt:5,print_preprocess_opt:5,print_train_opt:5,probabl:[3,4],problem:[2,10],proce:10,process:[4,5,10],processor:5,product:4,progress:[1,9,10],project:10,pronunci:10,propos:4,provid:[0,2,3,4,5],publish:10,pyplot:8,python:10,pytorch:[3,4,5,10],q_len:4,queri:4,question:10,queue:[0,1,6],random:[4,9],rare:9,rare_in:9,rare_label:9,rate:[2,5,6],ratio:[3,6],raw:9,raw_sent:9,read_csv:9,reader:8,readlin:9,recept:4,recip:[3,4],recognit:[4,9],recommend:[1,10],record:10,recurr:4,reduc:10,ref:2,refer:[4,7],regard:10,regist:[3,4],relat:5,report:10,repositori:[9,10],request:10,requir:10,result:[0,4,6],resum:[5,6,10],revers:[2,9],rnn:[4,10],rnn_type:[4,5,10],row:8,run:[0,3,4,5,6],sampl:[2,4],sample_r:[2,10],save:[5,6,10],save_dir:10,save_path:5,save_result_everi:[6,10],scale:4,scaled_dot:10,scaleddotproductattent:[4,10],schedul:[5,6],script:[0,1,8],script_path:0,seaborn:8,sean:4,seannaren:[4,10],search:[4,10],sentenc:[2,4,5,8,9],sentence_mark:9,separ:10,seq2seq:[4,10],seq_len:4,seq_length:4,sequenc:[0,4,5,8,10],sequenti:[4,5,10],server:2,set:[0,5,6,10],set_lr:5,setup:10,setuptool:10,seyoung:10,sh951011:[9,10],shape:[3,4],should:[3,4],show:[8,10],shown:10,shuffl:[0,9],signal:[2,4],silenc:[2,10],silent:[3,4],simpl:10,simpler:10,sinc:[3,4],singl:10,size:[0,1,2,4,6],small:10,smaller:4,smooth:[3,10],sns:8,sooftwar:[9,10],soohwan:10,soon:10,sort:9,sos_id:[0,2,4,5],sos_token:5,sound:9,sourc:[0,1,2,3,4,5,6],spec:0,spec_aud:2,spec_aug:[0,2,10],specaug:10,specaugment:2,special:9,specifi:4,spectrogram:[0,1,2,10],spectrogramdataset:[0,1,5,6],spectrogrampars:2,spectrum:2,speech:[4,9,10],speed:10,spell:[4,10],speller:[5,10],speller_layer_s:10,split:[0,2,8,9],split_dataset:0,stage:10,standard:2,start:[0,2,4,9],state:[4,5,10],step:[0,6],still:10,store:[1,5],str:[0,2,4,5,8,9],stride:[2,10],string:5,strip:9,structur:10,studi:10,sub:9,subclass:[3,4],subdirectori:5,sum:[3,8],supervis:6,supervised_train:6,supervisedtrain:6,support:10,suspend:5,symbol:[4,5],system:10,take:[3,4],target:[3,4,5,6,8],target_dict:[0,2,8],target_fnam:9,target_length:[6,8],target_path:9,teach:6,teacher:4,teacher_forcing_ratio:[4,6,10],tensor:[3,4,5],test1:9,test2:9,test:[0,5,9],test_data_list:9,test_df:9,test_dict:9,test_label:9,test_list:9,test_num:9,testset:1,than:4,thei:5,them:[3,4],thi:[2,3,4,5,10],those:5,thread:[0,10],thread_id:0,through:5,thruth:3,time:[0,2,5,6,10],time_mask_num:[2,10],time_mask_para:[2,10],timestamp:10,timestep:[1,4,6],titl:10,to_csv:[8,9],togeth:9,token:[2,4,8],top:[4,10],top_db:2,topk_decod:4,torch:[1,2,3,4,5,6],torchaudio:[2,10],total:[5,6],total_dist:5,total_length:5,total_num:9,tqdm:[9,10],track_running_stat:10,tradit:10,train:[0,1,5,6,7,8],train_batch_num:0,train_begin_tim:6,train_data_list:9,train_dataset_list:0,train_df:9,train_dict:9,train_epoch:6,train_ful:9,train_label:8,train_list:9,train_num:9,train_opt:5,train_time_step:0,trainer:[5,7,10],trainer_st:10,trainer_state_nam:5,trainset:5,trainset_list:[0,5,6],trang:9,tree:9,truth:5,two:4,txt:[9,10],type:[4,5],understand:10,uniformli:4,updat:10,url:10,use:[0,2,10],use_beam_search:10,use_beamsearch:5,use_bidirect:10,use_cuda:[5,10],use_multi_gpu:[5,10],used:[0,1,4,5,10],using:[0,5,6,10],utf:[0,8,9],utter:4,v_len:4,valid:[0,4,5,6],valid_dataset:0,valid_ratio:10,validate_arg:4,validset:[0,5,6],valu:[3,4,5,8],variabl:[4,5],variou:[2,10],vector:4,version:[5,10],virtual:10,voic:10,wait:[0,10],want:[2,10],websit:10,when:[3,4,5],whether:[0,1,2],which:[2,3,4,10],whose:4,wiki:10,window:2,window_s:[2,10],wise:2,within:[3,4],won:10,word:3,work:10,would:4,write:[5,9,10],written:10,www:9,y_hat:5,y_m_d_h_m_:5,year:10,you:[2,4,10],your:10,yyyy_mm_dd_hh_mm_ss:10,zeroth:10,zip:[8,9]},titles:["Data_loader","Evaluator","Feature","Loss","Model","Modules","Trainer","Welcome to End-to-end Speech Recognition\u2019s documentation!","Data-Analysis","Preparation before Training","Intro"],titleterms:{"function":9,"new":9,analysi:8,attent:4,base:9,befor:9,bracket_filt:9,charact:[9,10],checkpoint:[5,10],cite:10,code:10,contact:9,contribut:10,core:2,creat:9,crr:10,data:[8,9],data_load:0,dataset:10,document:7,e2e:10,end:7,evalu:1,extern:10,featur:[2,10],filenum_pad:9,from:10,get:10,get_path:9,global_var:5,incorpor:10,infer:10,instal:10,intro:10,label:9,label_load:0,labelsmoothingloss:3,languag:10,list:9,listen:4,listenattendspel:4,logger:5,loss:3,model:[4,10],model_build:5,modul:[5,10],new_target_dict:8,opt:5,parser:2,perform:10,prepar:[9,10],preprocess:9,prerequisit:10,rate:10,recognit:[7,10],refer:10,roadmap:10,run:10,sentence_filt:9,sentence_to_target:9,sourc:10,special_filt:9,speech:7,speller:4,start:10,step:10,structur:9,style:10,target:9,target_to_sent:9,test:10,text:9,topkdecod:4,train:[9,10],trainer:6,troubleshoot:10,util:5,welcom:7}})