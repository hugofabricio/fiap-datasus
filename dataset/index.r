#############################################################
rm(list = ls())

options(scipen=999, digits = 2)

###### Download Libraries ######

Sys.setenv(LANGUAGE='en', LC_CTYPE = "pt_BR.UTF-8")
libs =  c("plyr","lfe", "ggplot2",
          "dplyr",
          "data.table",
          "stringr",
          "openxlsx",
          "reshape2","foreign","tidyverse", "lubridate", "zoo","xts","chron", "ggplot2","plm", "stargazer","lmtest","apsrtable","multiwayvcov", "sandwich","Hmisc","pastecs","psych","doBy","modeest","purrr", "lmtest")

install.packages(libs)

lapply(libs, require, character.only = TRUE)

###### Set WD ######

setwd("C:/Users/livia/Downloads/Paula/Data/Final")

###### CSV Files ######

file.list = list.files(pattern="*.csv")

###### Create Empty df ######

df_main = NA 

###### Loop Files Excel ######

for(i in file.list){
  
  print(paste("Running loop for",i, sep = " "))
  
  df = read.csv(i, header = T)
  
  df_main = rbind(df, df_main)
}
  
df_main = subset(df_main, !is.na(UF_ZI)) # id not NA  

setwd("C:/Users/livia/Downloads/Paula/Data/Final")

save(df_main, file = "data_all.RData")

write.csv(df_main, file = "data_all.csv")

###### Analysis ######

###### Cost ######
dt = as.data.table(df_main)

setkey(dt)

cost_dis = dt[, sum(US_TOT, na.rm = T), keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(cost_dis)[3] = "cost_us"

###### Cases ######

setkey(dt)

count_dis = dt[, .N, keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(count_dis)[3] = "cases"

data_final = join_all(list(cost_dis,count_dis), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

###### Age ######

setkey(dt)

age = dt[, mean(IDADE, na.rm = T), keyby = list(ANO_CMPT, DIAG_PRINC)]

colnames(age)[3] = "age"

data_final = join_all(list(data_final,age), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

###### Mortality ######

setkey(dt)

mort = dt[, sum(MORTE, na.rm = T), keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(mort)[3] = "mortality"

data_final = join_all(list(data_final,mort), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

###### Days ######

setkey(dt)

days = dt[, sum(QT_DIARIAS, na.rm = T), keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(days)[3] = "days_hosp"

data_final = join_all(list(data_final,days), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

###### Gender ######

df_main2 <- subset(df_main, SEXO == 1)

dt = as.data.table(df_main2)

setkey(dt)

cases_fem = dt[, .N, keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(cases_fem)[3] = "cases_fem"

data_final = join_all(list(data_final,cases_fem), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

df_main2 <- subset(df_main, SEXO == 3)

dt = as.data.table(df_main2)

setkey(dt)

cases_masc = dt[, .N, keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(cases_masc)[3] = "cases_masc"

data_final = join_all(list(data_final,cases_masc), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

###### Location ######
df_main2 <- subset(df_main, MUNIC_RES == 355030)

dt = as.data.table(df_main2)

setkey(dt)

cases_sp = dt[, .N, keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(cases_sp)[3] = "cases_capital"

data_final = join_all(list(data_final,cases_sp), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

###### Etnia ######
df_main2 <- subset(df_main, RACA_COR == 1)

dt = as.data.table(df_main2)

setkey(dt)

raca_cor = dt[, .N, keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(raca_cor)[3] = "raca_1"

data_final = join_all(list(data_final,raca_cor), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

df_main2 <- subset(df_main, RACA_COR == 2)

dt = as.data.table(df_main2)

setkey(dt)

raca_cor = dt[, .N, keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(raca_cor)[3] = "raca_2"

data_final = join_all(list(data_final,raca_cor), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

df_main2 <- subset(df_main, RACA_COR == 3)

dt = as.data.table(df_main2)

setkey(dt)

raca_cor = dt[, .N, keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(raca_cor)[3] = "raca_3"

data_final = join_all(list(data_final,raca_cor), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

df_main2 <- subset(df_main, RACA_COR == 4)

dt = as.data.table(df_main2)

setkey(dt)

raca_cor = dt[, .N, keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(raca_cor)[3] = "raca_4"

data_final = join_all(list(data_final,raca_cor), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

df_main2 <- subset(df_main, RACA_COR == 5)

dt = as.data.table(df_main2)

setkey(dt)

raca_cor = dt[, .N, keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(raca_cor)[3] = "raca_5"

data_final = join_all(list(data_final,raca_cor), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

df_main2 <- subset(df_main, RACA_COR == 99)

dt = as.data.table(df_main2)

setkey(dt)

raca_cor = dt[, .N, keyby = list(DIAG_PRINC, ANO_CMPT)]

colnames(raca_cor)[3] = "raca_99"

data_final = join_all(list(data_final,raca_cor), by=c("ANO_CMPT","DIAG_PRINC"), type = "left")

setwd("C:/Users/livia/Downloads/Paula/Data")

save(data_final, file = "consolidado_all.RData")

write.csv(data_final, file = "consolidado_all.csv")

###### Analysis ######

df <- data_final
df$cost_pc = df$cost_us/df$cases
df$genderna = df$cases - df$cases_fem - df$cases_masc
df$pcases_fem = df$cases_fem/df$cases
df$pcases_masc = df$cases_masc/df$cases
df$mort_rate = df$mortality/df$cases
df$pcases_capital = df$cases_capital/df$cases
df$praca_1 = df$raca_1/df$cases
df$praca_2 = df$raca_2/df$cases
df$praca_3 = df$raca_3/df$cases
df$praca_4 = df$raca_4/df$cases
df$praca_5 = df$raca_5/df$cases

###### Analysis ######

dt = as.data.table(df)

setkey(dt)

merge = dt[, mean(cost_us, na.rm = T), keyby = list(DIAG_PRINC)]

colnames(merge)[2] = "total_cost"

merge2 = dt[, mean(cases, na.rm = T), keyby = list(DIAG_PRINC)]

colnames(merge2)[2] = "cases"

data_base = join_all(list(merge,merge2), by=c("DIAG_PRINC"), type = "left")

data_base$pp_cost = data_base$total_cost/data_base$cases

dt = as.data.table(df)

setkey(dt)

merge = dt[, mean(pcases_fem, na.rm = T), keyby = list(DIAG_PRINC)]

colnames(merge)[2] = "pcases_fem"

data_base = join_all(list(data_base,merge), by=c("DIAG_PRINC"), type = "left")

dt = as.data.table(df)

setkey(dt)

merge = dt[, mean(pcases_masc, na.rm = T), keyby = list(DIAG_PRINC)]

colnames(merge)[2] = "pcases_masc"

data_base = join_all(list(data_base,merge), by=c("DIAG_PRINC"), type = "left")

setkey(dt)

merge = dt[, mean(pcases_masc, na.rm = T), keyby = list(DIAG_PRINC)]

colnames(merge)[2] = "pcases_masc"

data_base = join_all(list(data_base,merge), by=c("DIAG_PRINC"), type = "left")

save(cost_pc, file = "cost_pc.RData")

write.csv(cost_pc, file = "cost_pc.csv")
setwd("C:/Users/livia/Downloads/Paula/Data")
setwd("C:/Users/livia/Downloads/Paula/Data")

save(df, file = "df_final.RData")

write.csv(df, file = "df_final.csv")