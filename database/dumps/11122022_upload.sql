PGDMP                          z            ots_test    14.5    14.5    j           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            k           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            l           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            m           1262    177911    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false            �            1259    177912    building-comments    TABLE     �  CREATE TABLE public."building-comments" (
    id integer NOT NULL,
    "projectId" integer,
    "unitId" integer,
    "subUnitId" integer,
    "monitoringId" integer,
    "directionId" integer,
    "criticalityId" integer,
    "normativeId" integer,
    "userId" integer,
    comment text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 '   DROP TABLE public."building-comments";
       public         heap    postgres    false            �            1259    177917    building-comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."building-comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."building-comments_id_seq";
       public          postgres    false    209            n           0    0    building-comments_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."building-comments_id_seq" OWNED BY public."building-comments".id;
          public          postgres    false    210            �            1259    177918 	   cable-log    TABLE     f  CREATE TABLE public."cable-log" (
    id integer NOT NULL,
    "sloeId" integer,
    "numberOfTrace" character varying(255),
    "cableMark" character varying(255),
    "cableSection" character varying(255),
    "fromUnit" character varying(255),
    "fromPlace" character varying(255),
    "toUnit" character varying(255),
    "toPlace" character varying(255),
    "cableLenght" character varying(255),
    range character varying(255) DEFAULT 'м'::character varying,
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."cable-log";
       public         heap    postgres    false            �            1259    177924    cable-log_id_seq    SEQUENCE     �   CREATE SEQUENCE public."cable-log_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."cable-log_id_seq";
       public          postgres    false    211            o           0    0    cable-log_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."cable-log_id_seq" OWNED BY public."cable-log".id;
          public          postgres    false    212            �            1259    177925    counterparties    TABLE       CREATE TABLE public.counterparties (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public.counterparties;
       public         heap    postgres    false            �            1259    177930    counterparties_id_seq    SEQUENCE     �   CREATE SEQUENCE public.counterparties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.counterparties_id_seq;
       public          postgres    false    213            p           0    0    counterparties_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.counterparties_id_seq OWNED BY public.counterparties.id;
          public          postgres    false    214            �            1259    177931    criticalities    TABLE     m  CREATE TABLE public.criticalities (
    id integer NOT NULL,
    title text NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    threshold character varying(255),
    goal character varying(255),
    "tenseGoal" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 !   DROP TABLE public.criticalities;
       public         heap    postgres    false            �            1259    177936    criticalities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.criticalities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.criticalities_id_seq;
       public          postgres    false    215            q           0    0    criticalities_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.criticalities_id_seq OWNED BY public.criticalities.id;
          public          postgres    false    216            �            1259    177937    design-documents_id_seq    SEQUENCE     �   CREATE SEQUENCE public."design-documents_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."design-documents_id_seq";
       public          postgres    false            �            1259    177938    design-documents    TABLE     b  CREATE TABLE public."design-documents" (
    id integer DEFAULT nextval('public."design-documents_id_seq"'::regclass) NOT NULL,
    code character varying(255) NOT NULL,
    "projectId" integer,
    "unitId" integer,
    "uqstId" integer,
    "subUnitId" integer,
    "suqstId" integer,
    "supplierId" integer,
    "stageId" integer DEFAULT 3 NOT NULL,
    "sectionId" integer DEFAULT 57 NOT NULL,
    "sloeId" integer,
    "cableLogId" integer,
    "monitoringId" integer,
    title character varying(255) NOT NULL,
    revision character varying(255) DEFAULT '1'::character varying NOT NULL,
    "fileType" character varying(255) NOT NULL,
    "filePath" character varying(255) NOT NULL,
    "fileName" character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 &   DROP TABLE public."design-documents";
       public         heap    postgres    false    217            �            1259    177947    designs    TABLE     
  CREATE TABLE public.designs (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.designs;
       public         heap    postgres    false            �            1259    177952    designs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.designs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.designs_id_seq;
       public          postgres    false    219            r           0    0    designs_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.designs_id_seq OWNED BY public.designs.id;
          public          postgres    false    220            �            1259    177953 
   directions    TABLE       CREATE TABLE public.directions (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.directions;
       public         heap    postgres    false            �            1259    177958    directions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.directions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.directions_id_seq;
       public          postgres    false    221            s           0    0    directions_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.directions_id_seq OWNED BY public.directions.id;
          public          postgres    false    222            �            1259    177959    documentation-comments    TABLE     �  CREATE TABLE public."documentation-comments" (
    id integer NOT NULL,
    "pdcId" integer,
    "udcId" integer,
    "sudcId" integer,
    "sdcId" integer,
    "directionId" integer,
    "criticalityId" integer,
    "normativeId" integer,
    "userId" integer,
    comment text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 ,   DROP TABLE public."documentation-comments";
       public         heap    postgres    false            �            1259    177964    documentation-comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."documentation-comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public."documentation-comments_id_seq";
       public          postgres    false    223            t           0    0    documentation-comments_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public."documentation-comments_id_seq" OWNED BY public."documentation-comments".id;
          public          postgres    false    224            �            1259    177965    documentation-solutions    TABLE     p  CREATE TABLE public."documentation-solutions" (
    id integer NOT NULL,
    "commentId" integer,
    "statusId" integer,
    answer text,
    "designContacts" text DEFAULT 'н/д'::text NOT NULL,
    "solutionId" integer,
    "userId" integer,
    solution text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 -   DROP TABLE public."documentation-solutions";
       public         heap    postgres    false            �            1259    177971    documentation-solutions_id_seq    SEQUENCE     �   CREATE SEQUENCE public."documentation-solutions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."documentation-solutions_id_seq";
       public          postgres    false    225            u           0    0    documentation-solutions_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."documentation-solutions_id_seq" OWNED BY public."documentation-solutions".id;
          public          postgres    false    226            �            1259    177972 
   equipments    TABLE       CREATE TABLE public.equipments (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.equipments;
       public         heap    postgres    false            �            1259    177977    equipments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.equipments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.equipments_id_seq;
       public          postgres    false    227            v           0    0    equipments_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.equipments_id_seq OWNED BY public.equipments.id;
          public          postgres    false    228            �            1259    177978 
   facilities    TABLE     �  CREATE TABLE public.facilities (
    id integer NOT NULL,
    country character varying(255) DEFAULT 'Россия'::character varying NOT NULL,
    vendor character varying(255) DEFAULT 'Не определен'::character varying NOT NULL,
    title character varying(255) NOT NULL,
    "equipmentType" character varying(255) NOT NULL,
    "measurementArea" character varying(255),
    "meansurementType" character varying(255),
    "meansureGroup" character varying(255),
    modifications character varying(255)[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "technicalCardId" integer
);
    DROP TABLE public.facilities;
       public         heap    postgres    false            �            1259    177985    facilities_id_seq    SEQUENCE     �   CREATE SEQUENCE public.facilities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.facilities_id_seq;
       public          postgres    false    229            w           0    0    facilities_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.facilities_id_seq OWNED BY public.facilities.id;
          public          postgres    false    230            �            1259    177986    fields    TABLE     %  CREATE TABLE public.fields (
    "subsidiaryId" integer,
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.fields;
       public         heap    postgres    false            �            1259    177991    fields_id_seq    SEQUENCE     �   CREATE SEQUENCE public.fields_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.fields_id_seq;
       public          postgres    false    231            x           0    0    fields_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.fields_id_seq OWNED BY public.fields.id;
          public          postgres    false    232            
           1259    178515    glossary    TABLE       CREATE TABLE public.glossary (
    id integer NOT NULL,
    title text NOT NULL,
    code character varying(255) NOT NULL,
    letter character varying(255),
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.glossary;
       public         heap    postgres    false            	           1259    178514    glossary_id_seq    SEQUENCE     �   CREATE SEQUENCE public.glossary_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.glossary_id_seq;
       public          postgres    false    266            y           0    0    glossary_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.glossary_id_seq OWNED BY public.glossary.id;
          public          postgres    false    265            �            1259    177992    impulse-line-log    TABLE       CREATE TABLE public."impulse-line-log" (
    id integer NOT NULL,
    "sloeId" integer,
    "numberOfTrace" character varying(255),
    "impulseLineType" character varying(255),
    "fromPlace" character varying(255),
    "toPlace" character varying(255),
    "impulseLineLenght" character varying(255),
    range character varying(255) DEFAULT 'м'::character varying,
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 &   DROP TABLE public."impulse-line-log";
       public         heap    postgres    false            �            1259    177998    impulse-line-log_id_seq    SEQUENCE     �   CREATE SEQUENCE public."impulse-line-log_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."impulse-line-log_id_seq";
       public          postgres    false    233            z           0    0    impulse-line-log_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."impulse-line-log_id_seq" OWNED BY public."impulse-line-log".id;
          public          postgres    false    234            �            1259    177999    logos    TABLE     �  CREATE TABLE public.logos (
    "subsidiaryId" integer,
    "counterpartyId" integer,
    "designId" integer,
    "userId" integer,
    id integer NOT NULL,
    "filePath" character varying(255) NOT NULL,
    "fileType" character varying(255) NOT NULL,
    "fileName" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.logos;
       public         heap    postgres    false            �            1259    178004    logos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.logos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.logos_id_seq;
       public          postgres    false    235            {           0    0    logos_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.logos_id_seq OWNED BY public.logos.id;
          public          postgres    false    236            �            1259    178005    metrologies    TABLE     g  CREATE TABLE public.metrologies (
    id integer NOT NULL,
    "sloeId" integer,
    "counterpartyId" integer,
    sgroei character varying(255),
    grsi character varying(255),
    min character varying(255),
    max character varying(255),
    range character varying(255),
    accuracy character varying(255),
    mpi character varying(255),
    "metrologyType" character varying(255),
    "documentType" character varying(255),
    "documentNumber" character varying(255),
    "fromDate" character varying(255),
    "toDate" character varying(255),
    document character varying(255),
    status character varying(255),
    arshin character varying(255),
    "verificationProcedure" character varying(255),
    "typeApprovalCertificate" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.metrologies;
       public         heap    postgres    false            �            1259    178010    metrologies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.metrologies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.metrologies_id_seq;
       public          postgres    false    237            |           0    0    metrologies_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.metrologies_id_seq OWNED BY public.metrologies.id;
          public          postgres    false    238            �            1259    178011    monitorings    TABLE     c  CREATE TABLE public.monitorings (
    id integer NOT NULL,
    "sloeId" integer,
    "mountDate" character varying(255),
    "mountDocument" character varying(255),
    "connectDate" character varying(255),
    "connectDocument" character varying(255),
    "testDate" character varying(255),
    "testDocument" character varying(255),
    "awpDate" character varying(255),
    "awpDocument" character varying(255),
    "commisionDate" character varying(255),
    "commisionDocument" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.monitorings;
       public         heap    postgres    false            �            1259    178016    monitorings_id_seq    SEQUENCE     �   CREATE SEQUENCE public.monitorings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.monitorings_id_seq;
       public          postgres    false    239            }           0    0    monitorings_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.monitorings_id_seq OWNED BY public.monitorings.id;
          public          postgres    false    240            �            1259    178017 
   normatives    TABLE     �  CREATE TABLE public.normatives (
    id integer NOT NULL,
    code character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    revision character varying(255) NOT NULL,
    "fileType" character varying(255) NOT NULL,
    "filePath" character varying(255) DEFAULT 'normatives'::character varying NOT NULL,
    "fileName" character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.normatives;
       public         heap    postgres    false            �            1259    178023    normatives_id_seq    SEQUENCE     �   CREATE SEQUENCE public.normatives_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.normatives_id_seq;
       public          postgres    false    241            ~           0    0    normatives_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.normatives_id_seq OWNED BY public.normatives.id;
          public          postgres    false    242            �            1259    178024    projects    TABLE     {  CREATE TABLE public.projects (
    "fieldId" integer NOT NULL,
    "designId" integer DEFAULT 0 NOT NULL,
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    contract character varying(255),
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.projects;
       public         heap    postgres    false            �            1259    178030    projects_id_seq    SEQUENCE     �   CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.projects_id_seq;
       public          postgres    false    243                       0    0    projects_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;
          public          postgres    false    244            �            1259    178031    sections    TABLE       CREATE TABLE public.sections (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.sections;
       public         heap    postgres    false            �            1259    178036    sections_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sections_id_seq;
       public          postgres    false    245            �           0    0    sections_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.sections_id_seq OWNED BY public.sections.id;
          public          postgres    false    246            �            1259    178037    signals    TABLE     �  CREATE TABLE public.signals (
    id integer NOT NULL,
    "sloeId" integer,
    "signalType" character varying(255),
    "signalProtocol" character varying(255),
    "signalParameter" text,
    "signalTag" character varying(255),
    ll character varying(255),
    l character varying(255),
    h character varying(255),
    hh character varying(255),
    "emergencyProtocol" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.signals;
       public         heap    postgres    false            �            1259    178042    signals_id_seq    SEQUENCE     �   CREATE SEQUENCE public.signals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.signals_id_seq;
       public          postgres    false    247            �           0    0    signals_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.signals_id_seq OWNED BY public.signals.id;
          public          postgres    false    248            �            1259    178043    stages    TABLE     	  CREATE TABLE public.stages (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.stages;
       public         heap    postgres    false            �            1259    178048    stages_id_seq    SEQUENCE     �   CREATE SEQUENCE public.stages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.stages_id_seq;
       public          postgres    false    249            �           0    0    stages_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.stages_id_seq OWNED BY public.stages.id;
          public          postgres    false    250            �            1259    178049 	   sub-units    TABLE     �  CREATE TABLE public."sub-units" (
    "unitId" integer NOT NULL,
    "equipmentId" integer DEFAULT 1 NOT NULL,
    "supplierId" integer DEFAULT 1 NOT NULL,
    id integer NOT NULL,
    "position" character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    contract character varying(255),
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."sub-units";
       public         heap    postgres    false            �            1259    178056    sub-units_id_seq    SEQUENCE     �   CREATE SEQUENCE public."sub-units_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public."sub-units_id_seq";
       public          postgres    false    251            �           0    0    sub-units_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public."sub-units_id_seq" OWNED BY public."sub-units".id;
          public          postgres    false    252            �            1259    178057    subsidiaries    TABLE       CREATE TABLE public.subsidiaries (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public.subsidiaries;
       public         heap    postgres    false            �            1259    178062    subsidiaries_id_seq    SEQUENCE     �   CREATE SEQUENCE public.subsidiaries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.subsidiaries_id_seq;
       public          postgres    false    253            �           0    0    subsidiaries_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.subsidiaries_id_seq OWNED BY public.subsidiaries.id;
          public          postgres    false    254            �            1259    178063    summary-list-of-equipments    TABLE     W  CREATE TABLE public."summary-list-of-equipments" (
    id integer NOT NULL,
    "projectId" integer,
    "unitId" integer,
    "subUnitId" integer NOT NULL,
    "facilityId" integer,
    "technicalCardId" integer,
    "installationLocation" character varying(255),
    "systemType" character varying(255)[] DEFAULT ARRAY['РСУ'::character varying(255)],
    "facilityModification" character varying(255) DEFAULT 'н/д'::character varying,
    "factoryNumber" character varying(255) DEFAULT 'н/д'::character varying,
    tag character varying(255),
    "controlledParameter" character varying(255),
    year character varying(255),
    month character varying(255),
    period character varying(255),
    specification text,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 0   DROP TABLE public."summary-list-of-equipments";
       public         heap    postgres    false                        1259    178071 !   summary-list-of-equipments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."summary-list-of-equipments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."summary-list-of-equipments_id_seq";
       public          postgres    false    255            �           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public."summary-list-of-equipments_id_seq" OWNED BY public."summary-list-of-equipments".id;
          public          postgres    false    256                       1259    178072    technical-card    TABLE       CREATE TABLE public."technical-card" (
    id integer NOT NULL,
    title text NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 $   DROP TABLE public."technical-card";
       public         heap    postgres    false                       1259    178077    technical-card-operation    TABLE     b  CREATE TABLE public."technical-card-operation" (
    "technicalCardId" integer NOT NULL,
    id integer NOT NULL,
    "workType" character varying(255) NOT NULL,
    "operationTitle" text NOT NULL,
    "categoryExecutor" text,
    "laborCosts" text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 .   DROP TABLE public."technical-card-operation";
       public         heap    postgres    false                       1259    178082    technical-card-operation_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card-operation_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."technical-card-operation_id_seq";
       public          postgres    false    258            �           0    0    technical-card-operation_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public."technical-card-operation_id_seq" OWNED BY public."technical-card-operation".id;
          public          postgres    false    259                       1259    178083    technical-card_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."technical-card_id_seq";
       public          postgres    false    257            �           0    0    technical-card_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."technical-card_id_seq" OWNED BY public."technical-card".id;
          public          postgres    false    260                       1259    178084    units    TABLE     �  CREATE TABLE public.units (
    "projectId" integer NOT NULL,
    "equipmentId" integer DEFAULT 1 NOT NULL,
    "supplierId" integer DEFAULT 1 NOT NULL,
    id integer NOT NULL,
    "position" character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    contract character varying(255),
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.units;
       public         heap    postgres    false                       1259    178091    units_id_seq    SEQUENCE     �   CREATE SEQUENCE public.units_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.units_id_seq;
       public          postgres    false    261            �           0    0    units_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.units_id_seq OWNED BY public.units.id;
          public          postgres    false    262                       1259    178092    users    TABLE     �  CREATE TABLE public.users (
    "subsidiaryId" integer,
    "fieldId" integer,
    "designId" integer,
    "counterpartyId" integer,
    id integer NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "secondName" character varying(255),
    "lastName" character varying(255) NOT NULL,
    subdivision character varying(255),
    "position" character varying(255),
    email character varying(255) NOT NULL,
    phone character varying(255),
    password character varying(255) NOT NULL,
    roles character varying(255)[] DEFAULT ARRAY['OTS'::character varying(255)] NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false                       1259    178098    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    263            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    264            �           2604    178099    building-comments id    DEFAULT     �   ALTER TABLE ONLY public."building-comments" ALTER COLUMN id SET DEFAULT nextval('public."building-comments_id_seq"'::regclass);
 E   ALTER TABLE public."building-comments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            �           2604    178100    cable-log id    DEFAULT     p   ALTER TABLE ONLY public."cable-log" ALTER COLUMN id SET DEFAULT nextval('public."cable-log_id_seq"'::regclass);
 =   ALTER TABLE public."cable-log" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            �           2604    178101    counterparties id    DEFAULT     v   ALTER TABLE ONLY public.counterparties ALTER COLUMN id SET DEFAULT nextval('public.counterparties_id_seq'::regclass);
 @   ALTER TABLE public.counterparties ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213            �           2604    178102    criticalities id    DEFAULT     t   ALTER TABLE ONLY public.criticalities ALTER COLUMN id SET DEFAULT nextval('public.criticalities_id_seq'::regclass);
 ?   ALTER TABLE public.criticalities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �           2604    178103 
   designs id    DEFAULT     h   ALTER TABLE ONLY public.designs ALTER COLUMN id SET DEFAULT nextval('public.designs_id_seq'::regclass);
 9   ALTER TABLE public.designs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            �           2604    178104    directions id    DEFAULT     n   ALTER TABLE ONLY public.directions ALTER COLUMN id SET DEFAULT nextval('public.directions_id_seq'::regclass);
 <   ALTER TABLE public.directions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221            �           2604    178105    documentation-comments id    DEFAULT     �   ALTER TABLE ONLY public."documentation-comments" ALTER COLUMN id SET DEFAULT nextval('public."documentation-comments_id_seq"'::regclass);
 J   ALTER TABLE public."documentation-comments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223            �           2604    178106    documentation-solutions id    DEFAULT     �   ALTER TABLE ONLY public."documentation-solutions" ALTER COLUMN id SET DEFAULT nextval('public."documentation-solutions_id_seq"'::regclass);
 K   ALTER TABLE public."documentation-solutions" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225            �           2604    178107    equipments id    DEFAULT     n   ALTER TABLE ONLY public.equipments ALTER COLUMN id SET DEFAULT nextval('public.equipments_id_seq'::regclass);
 <   ALTER TABLE public.equipments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227            �           2604    178108    facilities id    DEFAULT     n   ALTER TABLE ONLY public.facilities ALTER COLUMN id SET DEFAULT nextval('public.facilities_id_seq'::regclass);
 <   ALTER TABLE public.facilities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229            �           2604    178109 	   fields id    DEFAULT     f   ALTER TABLE ONLY public.fields ALTER COLUMN id SET DEFAULT nextval('public.fields_id_seq'::regclass);
 8   ALTER TABLE public.fields ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    231                       2604    178518    glossary id    DEFAULT     j   ALTER TABLE ONLY public.glossary ALTER COLUMN id SET DEFAULT nextval('public.glossary_id_seq'::regclass);
 :   ALTER TABLE public.glossary ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    265    266    266            �           2604    178110    impulse-line-log id    DEFAULT     ~   ALTER TABLE ONLY public."impulse-line-log" ALTER COLUMN id SET DEFAULT nextval('public."impulse-line-log_id_seq"'::regclass);
 D   ALTER TABLE public."impulse-line-log" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233            �           2604    178111    logos id    DEFAULT     d   ALTER TABLE ONLY public.logos ALTER COLUMN id SET DEFAULT nextval('public.logos_id_seq'::regclass);
 7   ALTER TABLE public.logos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    236    235            �           2604    178112    metrologies id    DEFAULT     p   ALTER TABLE ONLY public.metrologies ALTER COLUMN id SET DEFAULT nextval('public.metrologies_id_seq'::regclass);
 =   ALTER TABLE public.metrologies ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    238    237            �           2604    178113    monitorings id    DEFAULT     p   ALTER TABLE ONLY public.monitorings ALTER COLUMN id SET DEFAULT nextval('public.monitorings_id_seq'::regclass);
 =   ALTER TABLE public.monitorings ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    240    239                       2604    178114    normatives id    DEFAULT     n   ALTER TABLE ONLY public.normatives ALTER COLUMN id SET DEFAULT nextval('public.normatives_id_seq'::regclass);
 <   ALTER TABLE public.normatives ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    242    241                       2604    178115    projects id    DEFAULT     j   ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);
 :   ALTER TABLE public.projects ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    244    243                       2604    178116    sections id    DEFAULT     j   ALTER TABLE ONLY public.sections ALTER COLUMN id SET DEFAULT nextval('public.sections_id_seq'::regclass);
 :   ALTER TABLE public.sections ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    246    245                       2604    178117 
   signals id    DEFAULT     h   ALTER TABLE ONLY public.signals ALTER COLUMN id SET DEFAULT nextval('public.signals_id_seq'::regclass);
 9   ALTER TABLE public.signals ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    248    247                       2604    178118 	   stages id    DEFAULT     f   ALTER TABLE ONLY public.stages ALTER COLUMN id SET DEFAULT nextval('public.stages_id_seq'::regclass);
 8   ALTER TABLE public.stages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    250    249            	           2604    178119    sub-units id    DEFAULT     p   ALTER TABLE ONLY public."sub-units" ALTER COLUMN id SET DEFAULT nextval('public."sub-units_id_seq"'::regclass);
 =   ALTER TABLE public."sub-units" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    252    251            
           2604    178120    subsidiaries id    DEFAULT     r   ALTER TABLE ONLY public.subsidiaries ALTER COLUMN id SET DEFAULT nextval('public.subsidiaries_id_seq'::regclass);
 >   ALTER TABLE public.subsidiaries ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    254    253                       2604    178121    summary-list-of-equipments id    DEFAULT     �   ALTER TABLE ONLY public."summary-list-of-equipments" ALTER COLUMN id SET DEFAULT nextval('public."summary-list-of-equipments_id_seq"'::regclass);
 N   ALTER TABLE public."summary-list-of-equipments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    256    255                       2604    178122    technical-card id    DEFAULT     z   ALTER TABLE ONLY public."technical-card" ALTER COLUMN id SET DEFAULT nextval('public."technical-card_id_seq"'::regclass);
 B   ALTER TABLE public."technical-card" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    260    257                       2604    178123    technical-card-operation id    DEFAULT     �   ALTER TABLE ONLY public."technical-card-operation" ALTER COLUMN id SET DEFAULT nextval('public."technical-card-operation_id_seq"'::regclass);
 L   ALTER TABLE public."technical-card-operation" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    259    258                       2604    178124    units id    DEFAULT     d   ALTER TABLE ONLY public.units ALTER COLUMN id SET DEFAULT nextval('public.units_id_seq'::regclass);
 7   ALTER TABLE public.units ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    262    261                       2604    178125    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    264    263            .          0    177912    building-comments 
   TABLE DATA           �   COPY public."building-comments" (id, "projectId", "unitId", "subUnitId", "monitoringId", "directionId", "criticalityId", "normativeId", "userId", comment, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    209   ��      0          0    177918 	   cable-log 
   TABLE DATA           �   COPY public."cable-log" (id, "sloeId", "numberOfTrace", "cableMark", "cableSection", "fromUnit", "fromPlace", "toUnit", "toPlace", "cableLenght", range, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    211   ��      2          0    177925    counterparties 
   TABLE DATA           `   COPY public.counterparties (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    213   .�      4          0    177931    criticalities 
   TABLE DATA           }   COPY public.criticalities (id, title, code, description, threshold, goal, "tenseGoal", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   @�      7          0    177938    design-documents 
   TABLE DATA             COPY public."design-documents" (id, code, "projectId", "unitId", "uqstId", "subUnitId", "suqstId", "supplierId", "stageId", "sectionId", "sloeId", "cableLogId", "monitoringId", title, revision, "fileType", "filePath", "fileName", description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   @�      8          0    177947    designs 
   TABLE DATA           Y   COPY public.designs (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   ��      :          0    177953 
   directions 
   TABLE DATA           \   COPY public.directions (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221         <          0    177959    documentation-comments 
   TABLE DATA           �   COPY public."documentation-comments" (id, "pdcId", "udcId", "sudcId", "sdcId", "directionId", "criticalityId", "normativeId", "userId", comment, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223         >          0    177965    documentation-solutions 
   TABLE DATA           �   COPY public."documentation-solutions" (id, "commentId", "statusId", answer, "designContacts", "solutionId", "userId", solution, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    225   !      @          0    177972 
   equipments 
   TABLE DATA           \   COPY public.equipments (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    227   >      B          0    177978 
   facilities 
   TABLE DATA           �   COPY public.facilities (id, country, vendor, title, "equipmentType", "measurementArea", "meansurementType", "meansureGroup", modifications, "createdAt", "updatedAt", "technicalCardId") FROM stdin;
    public          postgres    false    229         D          0    177986    fields 
   TABLE DATA           h   COPY public.fields ("subsidiaryId", id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    231   7      g          0    178515    glossary 
   TABLE DATA           b   COPY public.glossary (id, title, code, letter, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    266         F          0    177992    impulse-line-log 
   TABLE DATA           �   COPY public."impulse-line-log" (id, "sloeId", "numberOfTrace", "impulseLineType", "fromPlace", "toPlace", "impulseLineLenght", range, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    233   ?,      H          0    177999    logos 
   TABLE DATA           �   COPY public.logos ("subsidiaryId", "counterpartyId", "designId", "userId", id, "filePath", "fileType", "fileName", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    235   \,      J          0    178005    metrologies 
   TABLE DATA           $  COPY public.metrologies (id, "sloeId", "counterpartyId", sgroei, grsi, min, max, range, accuracy, mpi, "metrologyType", "documentType", "documentNumber", "fromDate", "toDate", document, status, arshin, "verificationProcedure", "typeApprovalCertificate", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    237   >-      L          0    178011    monitorings 
   TABLE DATA           �   COPY public.monitorings (id, "sloeId", "mountDate", "mountDocument", "connectDate", "connectDocument", "testDate", "testDocument", "awpDate", "awpDocument", "commisionDate", "commisionDocument", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    239   �5      N          0    178017 
   normatives 
   TABLE DATA           �   COPY public.normatives (id, code, title, revision, "fileType", "filePath", "fileName", description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    241   >      P          0    178024    projects 
   TABLE DATA           {   COPY public.projects ("fieldId", "designId", id, title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    243   [B      R          0    178031    sections 
   TABLE DATA           Z   COPY public.sections (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    245   KP      T          0    178037    signals 
   TABLE DATA           �   COPY public.signals (id, "sloeId", "signalType", "signalProtocol", "signalParameter", "signalTag", ll, l, h, hh, "emergencyProtocol", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    247   3[      V          0    178043    stages 
   TABLE DATA           X   COPY public.stages (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    249   �i      X          0    178049 	   sub-units 
   TABLE DATA           �   COPY public."sub-units" ("unitId", "equipmentId", "supplierId", id, "position", title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    251   �k      Z          0    178057    subsidiaries 
   TABLE DATA           ^   COPY public.subsidiaries (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    253   	n      \          0    178063    summary-list-of-equipments 
   TABLE DATA           5  COPY public."summary-list-of-equipments" (id, "projectId", "unitId", "subUnitId", "facilityId", "technicalCardId", "installationLocation", "systemType", "facilityModification", "factoryNumber", tag, "controlledParameter", year, month, period, specification, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    255   o      ^          0    178072    technical-card 
   TABLE DATA           b   COPY public."technical-card" (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    257   ��      _          0    178077    technical-card-operation 
   TABLE DATA           �   COPY public."technical-card-operation" ("technicalCardId", id, "workType", "operationTitle", "categoryExecutor", "laborCosts", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    258   K�      b          0    178084    units 
   TABLE DATA           �   COPY public.units ("projectId", "equipmentId", "supplierId", id, "position", title, code, contract, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    261   ��      d          0    178092    users 
   TABLE DATA           �   COPY public.users ("subsidiaryId", "fieldId", "designId", "counterpartyId", id, "firstName", "secondName", "lastName", subdivision, "position", email, phone, password, roles, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    263   �/      �           0    0    building-comments_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."building-comments_id_seq"', 1, false);
          public          postgres    false    210            �           0    0    cable-log_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."cable-log_id_seq"', 148, true);
          public          postgres    false    212            �           0    0    counterparties_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.counterparties_id_seq', 202, true);
          public          postgres    false    214            �           0    0    criticalities_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.criticalities_id_seq', 116, true);
          public          postgres    false    216            �           0    0    design-documents_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."design-documents_id_seq"', 557, true);
          public          postgres    false    217            �           0    0    designs_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.designs_id_seq', 16, true);
          public          postgres    false    220            �           0    0    directions_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.directions_id_seq', 5, true);
          public          postgres    false    222            �           0    0    documentation-comments_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."documentation-comments_id_seq"', 937, true);
          public          postgres    false    224            �           0    0    documentation-solutions_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public."documentation-solutions_id_seq"', 489, true);
          public          postgres    false    226            �           0    0    equipments_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.equipments_id_seq', 48, true);
          public          postgres    false    228            �           0    0    facilities_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.facilities_id_seq', 164, true);
          public          postgres    false    230            �           0    0    fields_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.fields_id_seq', 38, true);
          public          postgres    false    232            �           0    0    glossary_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.glossary_id_seq', 133, true);
          public          postgres    false    265            �           0    0    impulse-line-log_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."impulse-line-log_id_seq"', 3, true);
          public          postgres    false    234            �           0    0    logos_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.logos_id_seq', 5, true);
          public          postgres    false    236            �           0    0    metrologies_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.metrologies_id_seq', 48, true);
          public          postgres    false    238            �           0    0    monitorings_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.monitorings_id_seq', 135, true);
          public          postgres    false    240            �           0    0    normatives_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.normatives_id_seq', 45, true);
          public          postgres    false    242            �           0    0    projects_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.projects_id_seq', 279, true);
          public          postgres    false    244            �           0    0    sections_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.sections_id_seq', 400, true);
          public          postgres    false    246            �           0    0    signals_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.signals_id_seq', 147, true);
          public          postgres    false    248            �           0    0    stages_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.stages_id_seq', 12, true);
          public          postgres    false    250            �           0    0    sub-units_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."sub-units_id_seq"', 144, true);
          public          postgres    false    252            �           0    0    subsidiaries_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.subsidiaries_id_seq', 23, true);
          public          postgres    false    254            �           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public."summary-list-of-equipments_id_seq"', 464, true);
          public          postgres    false    256            �           0    0    technical-card-operation_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."technical-card-operation_id_seq"', 920, true);
          public          postgres    false    259            �           0    0    technical-card_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."technical-card_id_seq"', 4800, true);
          public          postgres    false    260            �           0    0    units_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.units_id_seq', 631, true);
          public          postgres    false    262            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 16, true);
          public          postgres    false    264                       2606    178127 (   building-comments building-comments_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_pkey" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_pkey";
       public            postgres    false    209                       2606    178129    cable-log cable-log_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."cable-log"
    ADD CONSTRAINT "cable-log_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."cable-log" DROP CONSTRAINT "cable-log_pkey";
       public            postgres    false    211                       2606    178131 "   counterparties counterparties_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.counterparties
    ADD CONSTRAINT counterparties_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.counterparties DROP CONSTRAINT counterparties_pkey;
       public            postgres    false    213                       2606    178133 '   counterparties counterparties_title_key 
   CONSTRAINT     c   ALTER TABLE ONLY public.counterparties
    ADD CONSTRAINT counterparties_title_key UNIQUE (title);
 Q   ALTER TABLE ONLY public.counterparties DROP CONSTRAINT counterparties_title_key;
       public            postgres    false    213                        2606    178135     criticalities criticalities_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.criticalities
    ADD CONSTRAINT criticalities_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.criticalities DROP CONSTRAINT criticalities_pkey;
       public            postgres    false    215            "           2606    178137 %   criticalities criticalities_title_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.criticalities
    ADD CONSTRAINT criticalities_title_key UNIQUE (title);
 O   ALTER TABLE ONLY public.criticalities DROP CONSTRAINT criticalities_title_key;
       public            postgres    false    215            $           2606    178139 &   design-documents design-documents_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_pkey";
       public            postgres    false    218            &           2606    178141    designs designs_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.designs
    ADD CONSTRAINT designs_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.designs DROP CONSTRAINT designs_pkey;
       public            postgres    false    219            (           2606    178143    designs designs_title_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.designs
    ADD CONSTRAINT designs_title_key UNIQUE (title);
 C   ALTER TABLE ONLY public.designs DROP CONSTRAINT designs_title_key;
       public            postgres    false    219            *           2606    178145    directions directions_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.directions
    ADD CONSTRAINT directions_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.directions DROP CONSTRAINT directions_pkey;
       public            postgres    false    221            ,           2606    178147    directions directions_title_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.directions
    ADD CONSTRAINT directions_title_key UNIQUE (title);
 I   ALTER TABLE ONLY public.directions DROP CONSTRAINT directions_title_key;
       public            postgres    false    221            .           2606    178149 2   documentation-comments documentation-comments_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_pkey" PRIMARY KEY (id);
 `   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_pkey";
       public            postgres    false    223            0           2606    178151 4   documentation-solutions documentation-solutions_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_pkey" PRIMARY KEY (id);
 b   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_pkey";
       public            postgres    false    225            2           2606    178153    equipments equipments_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.equipments
    ADD CONSTRAINT equipments_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.equipments DROP CONSTRAINT equipments_pkey;
       public            postgres    false    227            4           2606    178155    equipments equipments_title_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.equipments
    ADD CONSTRAINT equipments_title_key UNIQUE (title);
 I   ALTER TABLE ONLY public.equipments DROP CONSTRAINT equipments_title_key;
       public            postgres    false    227            6           2606    178157    facilities facilities_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.facilities
    ADD CONSTRAINT facilities_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.facilities DROP CONSTRAINT facilities_pkey;
       public            postgres    false    229            8           2606    178159    fields fields_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT fields_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.fields DROP CONSTRAINT fields_pkey;
       public            postgres    false    231            :           2606    178161    fields fields_title_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT fields_title_key UNIQUE (title);
 A   ALTER TABLE ONLY public.fields DROP CONSTRAINT fields_title_key;
       public            postgres    false    231            f           2606    178522    glossary glossary_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.glossary
    ADD CONSTRAINT glossary_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.glossary DROP CONSTRAINT glossary_pkey;
       public            postgres    false    266            h           2606    178524    glossary glossary_title_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.glossary
    ADD CONSTRAINT glossary_title_key UNIQUE (title);
 E   ALTER TABLE ONLY public.glossary DROP CONSTRAINT glossary_title_key;
       public            postgres    false    266            <           2606    178163 &   impulse-line-log impulse-line-log_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public."impulse-line-log"
    ADD CONSTRAINT "impulse-line-log_pkey" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public."impulse-line-log" DROP CONSTRAINT "impulse-line-log_pkey";
       public            postgres    false    233            >           2606    178165    logos logos_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT logos_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.logos DROP CONSTRAINT logos_pkey;
       public            postgres    false    235            @           2606    178167    metrologies metrologies_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT metrologies_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT metrologies_pkey;
       public            postgres    false    237            B           2606    178169    monitorings monitorings_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.monitorings
    ADD CONSTRAINT monitorings_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.monitorings DROP CONSTRAINT monitorings_pkey;
       public            postgres    false    239            D           2606    178171    normatives normatives_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.normatives
    ADD CONSTRAINT normatives_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.normatives DROP CONSTRAINT normatives_pkey;
       public            postgres    false    241            F           2606    178173    projects projects_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_pkey;
       public            postgres    false    243            H           2606    178175    projects projects_title_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_title_key UNIQUE (title);
 E   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_title_key;
       public            postgres    false    243            J           2606    178177    sections sections_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_pkey;
       public            postgres    false    245            L           2606    178179    sections sections_title_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_title_key UNIQUE (title);
 E   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_title_key;
       public            postgres    false    245            N           2606    178181    signals signals_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.signals
    ADD CONSTRAINT signals_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.signals DROP CONSTRAINT signals_pkey;
       public            postgres    false    247            P           2606    178183    stages stages_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.stages
    ADD CONSTRAINT stages_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.stages DROP CONSTRAINT stages_pkey;
       public            postgres    false    249            R           2606    178185    stages stages_title_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.stages
    ADD CONSTRAINT stages_title_key UNIQUE (title);
 A   ALTER TABLE ONLY public.stages DROP CONSTRAINT stages_title_key;
       public            postgres    false    249            T           2606    178187    sub-units sub-units_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_pkey";
       public            postgres    false    251            V           2606    178189    subsidiaries subsidiaries_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.subsidiaries
    ADD CONSTRAINT subsidiaries_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.subsidiaries DROP CONSTRAINT subsidiaries_pkey;
       public            postgres    false    253            X           2606    178191 #   subsidiaries subsidiaries_title_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.subsidiaries
    ADD CONSTRAINT subsidiaries_title_key UNIQUE (title);
 M   ALTER TABLE ONLY public.subsidiaries DROP CONSTRAINT subsidiaries_title_key;
       public            postgres    false    253            Z           2606    178193 :   summary-list-of-equipments summary-list-of-equipments_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_pkey" PRIMARY KEY (id);
 h   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_pkey";
       public            postgres    false    255            ^           2606    178195 6   technical-card-operation technical-card-operation_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public."technical-card-operation"
    ADD CONSTRAINT "technical-card-operation_pkey" PRIMARY KEY (id);
 d   ALTER TABLE ONLY public."technical-card-operation" DROP CONSTRAINT "technical-card-operation_pkey";
       public            postgres    false    258            \           2606    178197 "   technical-card technical-card_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."technical-card"
    ADD CONSTRAINT "technical-card_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."technical-card" DROP CONSTRAINT "technical-card_pkey";
       public            postgres    false    257            `           2606    178199    units units_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.units
    ADD CONSTRAINT units_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.units DROP CONSTRAINT units_pkey;
       public            postgres    false    261            b           2606    178201    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    263            d           2606    178203    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    263            i           2606    178204 6   building-comments building-comments_criticalityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_criticalityId_fkey" FOREIGN KEY ("criticalityId") REFERENCES public.criticalities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 d   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_criticalityId_fkey";
       public          postgres    false    209    3360    215            j           2606    178209 4   building-comments building-comments_directionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES public.directions(id) ON UPDATE CASCADE ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_directionId_fkey";
       public          postgres    false    209    3370    221            k           2606    178214 5   building-comments building-comments_monitoringId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_monitoringId_fkey" FOREIGN KEY ("monitoringId") REFERENCES public.monitorings(id) ON UPDATE CASCADE ON DELETE CASCADE;
 c   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_monitoringId_fkey";
       public          postgres    false    3394    209    239            l           2606    178219 4   building-comments building-comments_normativeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_normativeId_fkey" FOREIGN KEY ("normativeId") REFERENCES public.normatives(id) ON UPDATE CASCADE ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_normativeId_fkey";
       public          postgres    false    3396    241    209            m           2606    178224 2   building-comments building-comments_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE;
 `   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_projectId_fkey";
       public          postgres    false    243    209    3398            n           2606    178229 2   building-comments building-comments_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE;
 `   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_subUnitId_fkey";
       public          postgres    false    209    3412    251            o           2606    178234 /   building-comments building-comments_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE;
 ]   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_unitId_fkey";
       public          postgres    false    209    261    3424            p           2606    178239 /   building-comments building-comments_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."building-comments"
    ADD CONSTRAINT "building-comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 ]   ALTER TABLE ONLY public."building-comments" DROP CONSTRAINT "building-comments_userId_fkey";
       public          postgres    false    263    209    3428            q           2606    178244    cable-log cable-log_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."cable-log"
    ADD CONSTRAINT "cable-log_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public."cable-log" DROP CONSTRAINT "cable-log_sloeId_fkey";
       public          postgres    false    3418    211    255            r           2606    178249 1   design-documents design-documents_cableLogId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_cableLogId_fkey" FOREIGN KEY ("cableLogId") REFERENCES public."cable-log"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 _   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_cableLogId_fkey";
       public          postgres    false    3354    218    211            s           2606    178254 3   design-documents design-documents_monitoringId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_monitoringId_fkey" FOREIGN KEY ("monitoringId") REFERENCES public.monitorings(id) ON UPDATE CASCADE ON DELETE CASCADE;
 a   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_monitoringId_fkey";
       public          postgres    false    239    3394    218            t           2606    178259 0   design-documents design-documents_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE SET NULL;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_projectId_fkey";
       public          postgres    false    243    218    3398            u           2606    178264 0   design-documents design-documents_sectionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES public.sections(id) ON UPDATE CASCADE;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_sectionId_fkey";
       public          postgres    false    218    245    3402            v           2606    178269 -   design-documents design-documents_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_sloeId_fkey";
       public          postgres    false    218    255    3418            w           2606    178274 .   design-documents design-documents_stageId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES public.stages(id) ON UPDATE CASCADE ON DELETE CASCADE;
 \   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_stageId_fkey";
       public          postgres    false    218    3408    249            x           2606    178279 0   design-documents design-documents_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 ^   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_subUnitId_fkey";
       public          postgres    false    3412    251    218            y           2606    178284 1   design-documents design-documents_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE SET NULL;
 _   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_supplierId_fkey";
       public          postgres    false    3356    213    218            z           2606    178289 .   design-documents design-documents_suqstId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_suqstId_fkey" FOREIGN KEY ("suqstId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 \   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_suqstId_fkey";
       public          postgres    false    251    218    3412            {           2606    178294 -   design-documents design-documents_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE SET NULL;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_unitId_fkey";
       public          postgres    false    3424    218    261            |           2606    178299 -   design-documents design-documents_uqstId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."design-documents"
    ADD CONSTRAINT "design-documents_uqstId_fkey" FOREIGN KEY ("uqstId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE SET NULL;
 [   ALTER TABLE ONLY public."design-documents" DROP CONSTRAINT "design-documents_uqstId_fkey";
       public          postgres    false    3424    261    218            }           2606    178304 @   documentation-comments documentation-comments_criticalityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_criticalityId_fkey" FOREIGN KEY ("criticalityId") REFERENCES public.criticalities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 n   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_criticalityId_fkey";
       public          postgres    false    215    3360    223            ~           2606    178309 >   documentation-comments documentation-comments_directionId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES public.directions(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_directionId_fkey";
       public          postgres    false    221    3370    223                       2606    178314 >   documentation-comments documentation-comments_normativeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_normativeId_fkey" FOREIGN KEY ("normativeId") REFERENCES public.normatives(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_normativeId_fkey";
       public          postgres    false    3396    241    223            �           2606    178319 8   documentation-comments documentation-comments_pdcId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_pdcId_fkey" FOREIGN KEY ("pdcId") REFERENCES public."design-documents"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_pdcId_fkey";
       public          postgres    false    3364    223    218            �           2606    178324 8   documentation-comments documentation-comments_sdcId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_sdcId_fkey" FOREIGN KEY ("sdcId") REFERENCES public."design-documents"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_sdcId_fkey";
       public          postgres    false    218    3364    223            �           2606    178329 9   documentation-comments documentation-comments_sudcId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_sudcId_fkey" FOREIGN KEY ("sudcId") REFERENCES public."design-documents"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 g   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_sudcId_fkey";
       public          postgres    false    223    218    3364            �           2606    178334 8   documentation-comments documentation-comments_udcId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_udcId_fkey" FOREIGN KEY ("udcId") REFERENCES public."design-documents"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_udcId_fkey";
       public          postgres    false    3364    218    223            �           2606    178339 9   documentation-comments documentation-comments_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-comments"
    ADD CONSTRAINT "documentation-comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 g   ALTER TABLE ONLY public."documentation-comments" DROP CONSTRAINT "documentation-comments_userId_fkey";
       public          postgres    false    3428    223    263            �           2606    178344 >   documentation-solutions documentation-solutions_commentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES public."documentation-comments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 l   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_commentId_fkey";
       public          postgres    false    225    223    3374            �           2606    178349 ;   documentation-solutions documentation-solutions_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."documentation-solutions"
    ADD CONSTRAINT "documentation-solutions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE;
 i   ALTER TABLE ONLY public."documentation-solutions" DROP CONSTRAINT "documentation-solutions_userId_fkey";
       public          postgres    false    225    263    3428            �           2606    178354    fields fields_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.fields
    ADD CONSTRAINT "fields_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.fields DROP CONSTRAINT "fields_subsidiaryId_fkey";
       public          postgres    false    253    231    3414            �           2606    178359 -   impulse-line-log impulse-line-log_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."impulse-line-log"
    ADD CONSTRAINT "impulse-line-log_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."impulse-line-log" DROP CONSTRAINT "impulse-line-log_sloeId_fkey";
       public          postgres    false    3418    255    233            �           2606    178364    logos logos_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_counterpartyId_fkey";
       public          postgres    false    213    235    3356            �           2606    178369    logos logos_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_designId_fkey";
       public          postgres    false    235    3366    219            �           2606    178374    logos logos_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE;
 I   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_subsidiaryId_fkey";
       public          postgres    false    235    253    3414            �           2606    178379    logos logos_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.logos
    ADD CONSTRAINT "logos_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 C   ALTER TABLE ONLY public.logos DROP CONSTRAINT "logos_userId_fkey";
       public          postgres    false    235    3428    263            �           2606    178384 +   metrologies metrologies_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT "metrologies_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE;
 W   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT "metrologies_counterpartyId_fkey";
       public          postgres    false    213    3356    237            �           2606    178389 #   metrologies metrologies_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.metrologies
    ADD CONSTRAINT "metrologies_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.metrologies DROP CONSTRAINT "metrologies_sloeId_fkey";
       public          postgres    false    3418    255    237            �           2606    178394 #   monitorings monitorings_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.monitorings
    ADD CONSTRAINT "monitorings_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.monitorings DROP CONSTRAINT "monitorings_sloeId_fkey";
       public          postgres    false    3418    255    239            �           2606    178399    projects projects_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT "projects_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.projects DROP CONSTRAINT "projects_designId_fkey";
       public          postgres    false    219    243    3366            �           2606    178404    projects projects_fieldId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT "projects_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES public.fields(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.projects DROP CONSTRAINT "projects_fieldId_fkey";
       public          postgres    false    231    243    3384            �           2606    178409    signals signals_sloeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.signals
    ADD CONSTRAINT "signals_sloeId_fkey" FOREIGN KEY ("sloeId") REFERENCES public."summary-list-of-equipments"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.signals DROP CONSTRAINT "signals_sloeId_fkey";
       public          postgres    false    3418    247    255            �           2606    178414 $   sub-units sub-units_equipmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES public.equipments(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_equipmentId_fkey";
       public          postgres    false    227    3378    251            �           2606    178419 #   sub-units sub-units_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_supplierId_fkey";
       public          postgres    false    251    213    3356            �           2606    178424    sub-units sub-units_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."sub-units"
    ADD CONSTRAINT "sub-units_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public."sub-units" DROP CONSTRAINT "sub-units_unitId_fkey";
       public          postgres    false    251    261    3424            �           2606    178429 E   summary-list-of-equipments summary-list-of-equipments_facilityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES public.facilities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 s   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_facilityId_fkey";
       public          postgres    false    255    3382    229            �           2606    178434 D   summary-list-of-equipments summary-list-of-equipments_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE;
 r   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_projectId_fkey";
       public          postgres    false    255    3398    243            �           2606    178439 D   summary-list-of-equipments summary-list-of-equipments_subUnitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_subUnitId_fkey" FOREIGN KEY ("subUnitId") REFERENCES public."sub-units"(id) ON UPDATE CASCADE;
 r   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_subUnitId_fkey";
       public          postgres    false    251    3412    255            �           2606    178444 J   summary-list-of-equipments summary-list-of-equipments_technicalCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_technicalCardId_fkey" FOREIGN KEY ("technicalCardId") REFERENCES public."technical-card"(id) ON UPDATE CASCADE;
 x   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_technicalCardId_fkey";
       public          postgres    false    255    257    3420            �           2606    178449 A   summary-list-of-equipments summary-list-of-equipments_unitId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES public.units(id) ON UPDATE CASCADE;
 o   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_unitId_fkey";
       public          postgres    false    255    3424    261            �           2606    178454 F   technical-card-operation technical-card-operation_technicalCardId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."technical-card-operation"
    ADD CONSTRAINT "technical-card-operation_technicalCardId_fkey" FOREIGN KEY ("technicalCardId") REFERENCES public."technical-card"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 t   ALTER TABLE ONLY public."technical-card-operation" DROP CONSTRAINT "technical-card-operation_technicalCardId_fkey";
       public          postgres    false    257    3420    258            �           2606    178459    units units_equipmentId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES public.equipments(id) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_equipmentId_fkey";
       public          postgres    false    261    227    3378            �           2606    178464    units units_projectId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_projectId_fkey";
       public          postgres    false    243    261    3398            �           2606    178469    units units_supplierId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.units
    ADD CONSTRAINT "units_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES public.counterparties(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.units DROP CONSTRAINT "units_supplierId_fkey";
       public          postgres    false    261    3356    213            �           2606    178474    users users_counterpartyId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_counterpartyId_fkey" FOREIGN KEY ("counterpartyId") REFERENCES public.counterparties(id) ON UPDATE CASCADE;
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_counterpartyId_fkey";
       public          postgres    false    213    263    3356            �           2606    178479    users users_designId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_designId_fkey" FOREIGN KEY ("designId") REFERENCES public.designs(id) ON UPDATE CASCADE;
 E   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_designId_fkey";
       public          postgres    false    219    3366    263            �           2606    178484    users users_fieldId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES public.fields(id) ON UPDATE CASCADE;
 D   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_fieldId_fkey";
       public          postgres    false    263    3384    231            �           2606    178489    users users_subsidiaryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_subsidiaryId_fkey" FOREIGN KEY ("subsidiaryId") REFERENCES public.subsidiaries(id) ON UPDATE CASCADE;
 I   ALTER TABLE ONLY public.users DROP CONSTRAINT "users_subsidiaryId_fkey";
       public          postgres    false    253    263    3414            .      x������ � �      0   ]  x��\_���>�<B�;%����0�E8⢨<�%߀Gv%�$�8��ن��T�*|����o���ά4�����a�*�[�ͪ��ju�4�1��1�������~V������a��~Q�T{�����W��������H}�~R_���������iQ���-�̸�X�����Ћ�����^�<��~���p3{��u��I��?���[?㯗��O����l���������;|������yů0N�_`��t�U�d�Ti���5E�F4�4����C�����)��*�ٔfQ��EK���7!��$'�\�P�P�����������,�,��G������,;%*�J�3�B�rA�j�X\�ۼI�y�����;k��>{���9lmZ��1+S0[1��)eLj�P.��-'9�KIALJ)�*�KcM�*�(WĘ���HKĴ�TZ:GKW��� �\c[Zz"-��Si�𒼒��J��B�rC�ky���T��L��]��y���C^1D�%v���D^:�ey���� r�0⹒�$h�E��
0>*fx���y�!/7@	r8�E'��P ��_���S�WCX��R��B�bm`e��?����J�[��i'EHg=�WYqQ��rcQE��m���h��z��j��rT�!�鵶���f�DA�ȭ��ش���P��k���n�x/}~�3��f�u�/F~�ʝo��дgM5,J"��@$q��)���<�8�)� �$E���pkT}r;?���e}�n��s�TR�j���&^+�M%D)@f 
�8Ap��..�k��_6���>0��o]���yB�a�/��&����>�$�j�+�*e�t�;�K�씃���r6ѭI|8?�,�����S�n|�nez
:����~�� G���n����BTHZ�k7f8ş�#���у���Q\5C?�Տ��*��޹��&�����N������ԟ��w�D�E�|���w>kBъ�=vV��������9(�3��|�|q6��=}�ݽ�1�/DF߰�r���`�(aP['
�c��_c���Z�[�M�(Z�靶x9���������g�L�-Z�����	��4P�K��Sl��.~�q�/	�	L�.��>H�IW��tN�CTh4�%��'�8#�Wb!�j�;F7�Yj���H�,��0hAG�.aE��b:�ī��*L�7�^�����w�`�L�%j�\�BTء1a�1���%�U�l!*�В���̙+^(L!*�jy�ШY��u1�ՎL9�2P����Xb�f1�8&G�!��0ܛ��-��n��t���<n�٬�t�t�2� *-�r{���2N���8Nnp`�4����A���Ὓg[�ו6�T�¾Z��_d{g1�~Q��g���!>��[���~)e�&�.�P�!*�i�,�J�D1�ǔϟt�:IF1D�>m���!TbymdGx�ek���#j���wu%�I܏!*�i�ls�@T��W���H��U��*v���qQ�AՇ.�j�Z,C�݆2�e.*.K�L�!��QV�2$��ʯı������J�6�.3�C�*_yiO��{l��d�p�R�tlc���c�R�t�����!Sl�U��QN��1D��)���ד�ZMY���i���QK�*_y�^K���n���a)Z�96 +�A/7A
!��I�cd�!C�j>�3�#����z��N���O
Q���(��g�}k�2����*%��
 ���b$x�&!�Հ�d�;fF"�DBT��H�f�ZF��X�e���ek�d$Tš�*�B�j;`4���2���l��!��'�$F�e�.��a����5�җF1D���:���
4�KB��&�ef�!DMt��`-��}rQ#N!�[�
!j�k�r��n��Z�r-D�v��tBAc;%�*���!DqF��rS	�jBX��\�ĉ"d3a;�(s`�_C�_q�5��
��b��\�P���+��B�b�=i���,3
C�b��	��u�c$�	�[�-?U�M�>j}�"��[o�^|��n��gQx�X	j����x���#���ژc���g՗789�� j}���on��-O���_��EsHj��X�q����#&��9�'�-�gК�c<g�1�՟�a�t�I^X j}��+� �@r��d�R�� ���7��@57�?���p1k Q�K�\�	�*���t%�8Vy1B���\���#��6V�e�l�46�5��?l�<��p��â=���M�l4�G­���U� C��M!j]`���2h��d�%B�:6�c̉1K6�-���J� ���V���fѹZ&���z�Ir��-^�M�Q0Ɂ�0σ��!��&�6M��ڇM�m����h	��i�Y1W��@
!�u�5�6�@�4ί��xMQ�pڛN���
��P)^�dO� ��1�Lk�S�5��k�iN3'�������޸���7�EX�|��h�qp�?>���x�8����~��E+y�y�6��țzy�(�H�O*늫�&�Ew̶v��e�v񦦷�V�L� K�J�Ҙ$��u�H4�s�va&���C
g��A?,�R����1fJ�w@�94��&�U��d�{O��꺒¯%	�T�1D9c�]��7���=F�������j��%4��6��%� �%H r���l��'�2]9��6���T\��wB$>C�_�!A�+��s^bnH�v�x���mS�R�ti��!�Ӕٱ��ꆑ�Ɲ�Q�ƗW�{V��,Ɂ1D}���:`V<��]��V��xfW�-X�y�!���B:��/vC��;h��I��"^oQ)�����1��4�2�rG��op��¨RJ��IQCH� )��vB
�B��V�dny��$�*��u�r��	z�׻��;�v/�U�N�W\%r�bG�vw�h��X��g�����+fq���������7����(/%nC9S�#/��?�ɮ�����]D�#o�ٞ�R�([�s����)cT�W�� i�<h��O��7�V��o\�O���!<P��b�]
��X�j�A�FA�6P�64w*r��2����L�a�� � �,��[A.Uy0��+�(9����\�DF�� H��c�E�&#�(G7��1,�yHhv�g, �� .�8Z�Pܹ�W0.��s��f�:\�A(�|);ѰN��@K���Z�D��.�m� �C(�m���Ɏ�ދ�ȳ�x�o�K%��C(�ԝx��ۉe��|���<|N%�/���ZVJ�^����:���w�F{*rj�QP�Q�������~�9K���J^���P
�9�R6�ً^�t9����p| T Üj��lVv
<��{��_>w�?٘������Ysg!U#�Pt�o���6����]���{ Q�T�)�V)�٦��k�}�Y�u�M�N�� ���i��P��_�����~�Dh޲�҆�sj�wM6q��J3dTh�a�j�\����'7Ǔވ!���UG�F,p�@sm���q� ���O5��6�W��{ӣQ��H�ڙ�HU��!��"M�{x��{m���v.�0��$�����,��7�V��� ���l�d�N�����4z�lhyFv�l|ʡl/F���h�|����q��`x�-��/�ܺ��.�B(��n��C!����^]co��]�%R*;�(�R6��d�0x+@��:����\j��lSOC�7/���W��MFx�p��o�k��B�ǴX������ʖ�4	�'	���e,yC�GKHLC(㙖���l��n��9&S�F4�A���|9%��/%�����j��\��ݨ�[���)�MZ9-�O�J�h��1�MD'3�DWRJ�_ҡ=      2      x��\[oGv~���3��t��-X�x:H�Efv���
��Q��q"ɢHj�P$�Y�c��Ƽ�����%9��:��,��}��;u;�:5qC���PM��tM��S���Q��DIҌ�͸F�~����Ջ��5� i�u����;u�~D�ӵP���: ���Oac������be5�uo�ΣջwԎ�� -0m�	�_���k��S$�D�CR�5��C�#5�>������<}
(�C5�5R�h@�}�%��e8$yѿw �H] ��+�� 4��ǦN��p_"����� �*I��R!)�R����9Hq�}-%޹�IA��u�������#���˦ڃa��_����X��Z�!ʳ�%Ij����%�>p�6�g\���Ǹ��	�Խ���"RG�H��~]=����<��1��p��H]ÿ.��j��กu�R��iC�YX���aV��5,�����:�	$	�'���T3C�'0(W�ח!:,	�# ��pQ�'�Ñ��.qt�/`��pCX ��(�H�@����uY�t����9�O�0���uietc<&��A���W@:��m��� �����3P�0 ��!�$\Y�)�K8��v�5�*3�3݇a�G�X����YX΀Qj�3�$Le	S��T�C���=����9	�^@f�S	L6D
b[?�t��
�1F2�QE��{��jca�@c�1C���ĘP�q�����%u��76�D�-��$�D�%��=��3�Q��^,F�Fl�#G;抖Ȥ�d����40��o�
��_��� ��h��^ɶ�HA;���}`| {�>���C��4���K�l�$����nH ?�@b������U�Q��XV��#޳���V�`���<�1���v1~�K��M=�Y������HA�U��AH^�n���;Rfμs�B�<\�O�E�uN%����<Z�cao���G��l��$ݙasty�4��:G3I.�Z)Hz�r��ڢ�j�8[��+	K�;D
��|X�>�X˚�HAZ:y[�YBk̬n�(C&�a�՗�ߪ�����5��lO�D
Ҵ"�n����]8�PԐ%)d]O� m;�Ц4a�aO�аjp�-�YF�U��#0��[���76�D������J`y5��	P6 �ç�F�{IJ��	0-��q�:#� �۞W�I)�vHi���T�,��~0A�
jǕ�N�^54B�3/�H�(��!�2$�����@��K��C��%�RW4)hۻъ8���H
=�	Dz�A<l{�c��\���7j[��{I<A	R�ns�كx����#E�kh�P�O�����Ŧ��{�?���iHA��h�wQ�M�=�PTC����AA�[,,K�s��4W��M�>�f,�����!�άe�29}�8�Ӑ�v׿6����H~j��0R�Aa�Q�^��sE���7_[I0AeR��N��N�.��/(pC
��Ѩ��*��5���0���xR�}.�;�1P��l�!��ߒ�z�	����m+&�	YᾐE;��Vg�v(\��8P���<7e"���3�W�U� ��za��Q�cw���>nr@n?K8�5����ӘM�ٜ�� ��#R�u�*g�N{H�qRC^���vI�a��19lg����|Kk�_nċ7 �jڣ':ڟ��X5���}��%�e��I���ڤ4 �� �5��J�O I���#R��
r8����xF5�X��<�(Z�FI�$`�b)�'��A�Q��$�[�<��6]#���r�U�T��Ɠ�����g;���٤�"��"�P�B�E�@|Кg�6�&�ザ�9i쉐ളX���E������3GL6LD
r;��1�~Ӎ�9P�}/ ʪ�4cnJb�u[�4�o$ Y�)�mwo�>�����x\��z�7)�,�rD7��f�h ;Q5uuL��r&�i2Z��3��N)���
�-5h�g���ר��$�d�O��;ڄU�	@æ��2F�/0�`�rS+IY�)�ت퀖�K�k���a�����V�ۋ�7�ǳ�@�����I���M��)���b���!�{��9�}p�{��I����HA�U)ch�ˌ���"���$RбsD�:O��v�'Euc#Iy��z�S��T�-mK�aL]�B^�D
����8+����>��T^wD
���X��k��+,�ꓤ��u��R�!�$Xٻ R�M=����L�\%�d�HA���3������=�A��"�� �D
�v�F;�Bp(�-d^�:�e���3���?1I��W\r�.�)2��3�{j��s�c���⦠ʥZ�����DBVeD
�v�;S57�/>������/{X�4�������\�Ev7�t��U�|�-�)4�cL畄'�N"���7�*�1�ν`�T>I5�L��+�A�PA1$È�����������+��*��i�e03����ۘ�{1�Sޖu8��^ڠc�c��dOˮ�{�^b.kk"����9砦�v�������f!lE�C �f���J2D�.�6�(掽Bk�+XBԡ4�����l$��:Ni�:��-<*B�mQ�ӕ���f7�3ن)���[��2�NpZ/���.��;�:��Tp���K���C�'�"+�ǰb�������pc�pd��ȸ�/���#N��bʗMJ�#-S%t�(��e���q��q���A�.)�$L�0d\��f�T|>��8���v(S�l]�U}-��V ���VT��^E�X�$���e��m�l7󿧰dj����ԬWY�	�:�z=�ֶ�:89����еk��_纔sr��uDqZ֌�l��=��u
aG�vi#Ǒ���N)��t�ě�7��"5Nl��yP�Je�`=�j4��ؔ+����˄W�S0�P�C,�+�ez�(�u@�
.~�e|�%
eB�(�g�lNr6'q���rg��>Ж��/ۓ��I�{r�����R-FxW77��j�3Z�OI=8�{�(�l:{��W�=�İ�[vI�x=����_����*gcU֝s�ϑz����E+�%�>�l��q�g�����t���f˓��͓Nm�	,���H���4gk�����Z�&s�%���g�f2Aam���hV-���<e+.�����sٖ�lK����M�V|�U���h7sٳ��E"��*�+=rO0>��Y��)wR�1sVj��xt�c��~Φ�J�d��U_Nѹ��k I �����Ջrt���]zg\�QZ�wY��}�8���MP�X�|�)��Q��Z�$TYwX;��;z2>���\��*`���>����-��:����Na��e��K��vIIb�j�d	]փ|�4Nݚ�1�" �����Q���+k@��;�x�t�c�O=�⒀}�G��C!?����$B��Mꔃk?
�����������/t��u�ˇut��9[/G�-,�8��n� q�u���v���'�*�^�<�V�2]�@��zE��M�֜���=��ɢR��Q _�ƔHT	[֯�&���6�ݖs:�yBp�k�S�Y�_K�E	d�=�m��Ȕ(pv�y�8������>郟�ۿ�xz�����3)�*]75$�N�؞�O�7/em$]�4$AH��u݉.o�p�9��㙛�1*�C'�N���C꼐0d��7Ic�j/
���0o�չ�׭���]�$S� �ňu�����]�H ��K�5�rD'�%5$�W�1j#<h3���b�|��w�c�f��I�z��-!�D��nF^�<S�T��Rg��u���cى*D�B �*�!�{sg�/k���-�v���9��jPG<���~�IQ�h�����h��M1�Z��r���c� ��7�Z��0V|������/>X��E���h��v��S�2�!�]�8��9�ʿ15�����z����� ��M�3{��_�p"܂���G��oW~����qg��l���j\�W���!މ-��t߬7�C%ΈnW�Î�D����L��K����!_������G��'m�9�w~��������VV% �  ل��T[S�5�r`7.)�g=�0��ِ'f�!�I�/JP�S�vCs�!b+1���^���{:K{M^�[6����:#/�B�1$��%R��8Ӏ��f��R����d��|x�O��Cv�@���k����xV�W���e�En}��Z�����1�8j&�0���N?�Z��zI��Z��{\+�	d�ASyUE��q�u[k�zI�d[HI��l�>�rN��v��{I����Ǖ�_����{�VV�O<ZY���wV��y?J��H/)��ŭ�%*���WC���R����h�Z��Q� #n,�Ǘ�V����<\�<�2������3�뒀�%m�ˎ�~����6�9[��f]��j�����DG��q�Y�XjԒ=��q�ʺ�n[$���
�+���T\��e}���\g�J�~���ϸ�$��W��c�y���Zj�O^�iҊ3?���=���"���%Es�r4��uʟ��a�i�%Vf]�@��\X�������i?ʝ�v��`�G3�qɽ(f5!�3��igf�$��4�"�7���4�<�<��c��y��$`�^_�6&�>��c�Kp+�E��v���ϾIin,?�K9�Ƨ�����Y6Y?�Z���K6���g����[�(~�tc�!�1�H���X���/?�?}��^+��:g�`�%�t����v2ܦt�ɧ�^+�}X$�����w�8�|N��e�x��-5j�^AҸ����EA�/\�4�+d��&��˥�����o筎u_�K�N=P[4g�$�j�a?y�����?��'*��[���)�֓W�������I��,g^��ʃ�����O>������'�+�n?�"�գ/ZK�*ك���-�S�	P�(��A�6�ݡ�6�E��76R�q�Vc��[��^ e��o-.�ï��On�}óvccpW�0n���u`m[����
�D�tEn��N�[*s�J�$�֭pk��2���v�׫p�dn�,�$QT���l��Gnq�[G����7�EI�WW�Z_��%�mA��f�Ϥ      4   �  x��[�n��>SO�K ���d�grL�A�`/s
$� ��m�O�{�8�`wf�� ��d�hˢ�}����n�IvS�cc��&��������u�A��8;Qqv��U��s���L�0;U�P������!}?��P%�y;�������}�戮��~��NBQ􏗩���k�r�?�^���u���N��nw���텝��������kjE;�����<TsZ{�nIژ�%Po�}�f�ivLґ s��w�H���P]�#P2���k&��I\}9�]�'�B���)lG�!����]���R���O0 R�lK��ɳ�PM�Z�+�5X<���Y��z�d@���vjD���mF�A����-D��E9æѶ�42��?���RJ7�*�rE~\*�ǜ����3��YuH2�Tr��,W�[�N} ���?׃��P���[A7� ���"C�h7P'E�}������q�����a>�6�:��Yc�	��4ǘ�BbE�7;��xI2i>�&�6i�uD���-�eY4,/�Ǭ$HY"� ��ly}���G�v�\/K�o��?�ꓺb?}����w7����7^wj{1�6��g�H��@����ꭺ� �&�8�;���է6�o��pK����Ϯ�rav��q�b�qd��>Bp����c�l٪������P�c�.S���VJ ���&��;{|��-��)�G\l�!�C-��-�k������#̌ eb�X���\:�������`�t�gKۺG�6�Կ���r����d�Q]r�p�fF�D�{E�&a��S��M�`�Ӆ�+O��S�F/���{j�1|F0Ƅ`���C�%`�%Eoh�0i
����A��o zu����qֲcY�**���l����:���G�6�^]��l
In� P��� ò����L��i�qW�*-���$|G*\X�\�Oa��v;~�܁GF�(��A	=dQ�pRP�	�2���.��c�kW���A�K!×gv�"�B�.�`��K�f�E�J�r��e�?N'����HŖ߳��^�q¾�VdMF�k�������b���
�b�T������J^C?��5�I�k>zK�e�����F'���lv��T�搂÷��C��V YoH�3˚$�f`�	pG�	ޢ�.��$aհfd9F�O�k��@6��DLO�ҩ��v�wr�"��{�kv�B�j�Q%�l�Lߵ�`�i�3�
E.�"�����S\�)*��f�ۡ�F?ǈ?��� �}>����������R]Ը`���j'��]X���>1����r"3�RSŹ��A�G������'Kl�N��C]��`�;�Rr�<�E��l���d�1��2:w$�������E��b"?d"`���+�m���T)���5�y�@P���I�1AP�i#K��7�e�+�ќ��)��4�E!z�6.��N*�{q5z~_
[�DL$��|V��:��UO���!����d*�1\���?���᯿���~��z����a���(z�"	�e}���-���;S�6Y�f��F�&��A�K�ؓco&&���p��� ���Gt��1fKѷ�����9
�O��X���k6�������~��S��b��C7��ܺU����Q�7�!���<6�M	�%SAהm���tCt�5�4���&r���c��#ݮG���x#�XM\���^+l�
�T����Y��1��89��=1�!�K����T"|�B�Ac[�U���b����)m��y��܅�ŋ�&=��_����+�+,���dO��y�O(�rp�ʗ·��BS3�)Ʀ����t��������t��c����9xo���)s^S�h��6Bp �bj)�V� Y�2���>����3J��
�lxÐ�Ai%�!����_\��J}e?���=��j�.;ܗ���_b�>5���W<?M>y`�v�ݖ�A7(�e�-���c*�4�.Ѐ��l.:^(� �z�%ݐ7�<��y���]Q��j۫�?�b�Շ7y[�v�&��J�ךy�&���hf���B�8�G�(
����C�m���8TǍ�OW���I^q�����w�W921
5�zU=U��m"rd*{���c8�nn��QX�kT}���%�~Z��j�ݗ�v��֎���a~lV?p)qHte��˴�Mq�ySX��F�[/�f����k�;�x/2�DVY���]\�`١���'8��화��>��5j�5*���r�<��'�� �.n>�UNMn1g�䵷��d}�7�[�R�ʋ����#�o�y��MYl)�J���t���4Zc:���0/���Z���i�}�cwk,��
�3RR�#��*��wxv<%���t�̾j�E�ڷ�#	��������e�_�R��w~t%���CY��g�:�t���r�o�1�)�(�+��y�l�_X�Z�)�8���z��t[]���7?$,j`L�ЁT�`�:a�T�h���э�g�ꅀ7N���nb;�7��y����,��]��wQ��<���f&W���y�iCp�ՎP��u�^3��v2,=)9UC�����I��-��p2�oI����.�걞����=�n��^��90��0��~�ɰׂu_4�ć��0�eF��q�{	j�\��������Y8�CI9��h ̍ߧ�@��-�_4�os�v_��ˌjIM�)C�h���%O���+-�l��a�U�������__�Io��~{�-�}��)�=Fh����\�L�H��f���M��L�3����՜YNqM��V��eZ���f��
﯐�JWB��:��r�	n��nh-T�$ǒ���0��E�G�y��9' n�1�Z�-�ڐ�CAs�9_Gc��Oә����}Bk ��ᓼ;4�ۼi����Ћ�_9���"<T���[/�VD�� x]�pl�>6yTof6q����S�Ŕ��e�nb�T��[փ���{�pD�&���ǭG�O_n�Z��B��|      7      x���m�ב.���Wԧ���I�����3�v`��D�^����w0EJ�gV�+J�L]Jb�I�j���%�j�	� �/�/و�YU�r���X��n��nuwTUf>O�8q���G�ңks�$~_�cG�,+ʯ����|<��<�����(����'g7�S���W��E?�
�tM����_����_�V�.�=*?eQ�Iy�GTPQ�D4-��_O˻��W������t���k\��'�g����S��S�N���>Ļ;{g
����f���{��Gg���|��B9�qVi"m��ȔXZ�0E�'�q�9��p7ebF�L�H1�?S�B4sH�v-L9�������S����T���g�F��~?�(�x���g����o~��2��o���0 V��<� #�ʻG&ձ.RJd�rD/'�9NReu洶x�zf�Y�4��M�G����������{7�
�r\����I#+%��Hj8IR�eLs�e֪<��	��i)��Ÿe
��!kT�~����|os@S�9K��
P�JRb�1Dgi�h��D����8�,3}D���0�Ҏ��"a�$Z��f0�cg��J�`x3�T�A4�L�s	@�!���4�2�I=����ne�L%� �& �Ԛ8�bPQ��4syƳ �|&UDmʆhb�P���C s����J�$M�H�&�I��e���0�JUJ54�<0�4E���RrfXT���s���u�|v����r�kX�P���`Hi�HZ�E�S�D�u a$y`Bj�&�.�U�[�l���I�s�扁�^g�)�HR$��� �L[NgRG����h��|nG�+|����I?����s�͟�O������x��]�v�s��s�=x��m���"I�#Z1Ndn�4p*H��X�B�Ҹ ��8	��m�&��1֗c�߽�;�&Z��u|V�����F�OX�)N0f`cM`&k�&L���	�����ު�no
w�G�p�_/����]w�mfT�e��Th��8&<�1h�Kr�Vzո ���Vx�[S���)���*h�S�����N���Aʧg����D��+MT~���;o*O�o��+O/�`��!��PFAbVZeI����B$���PH�M�
3p�<WyxR�k|�7�����O�(�I;a4̅�܀�NRf	+Lb�����A�Ռ�1�*�rC4a:��qyg�x��x��]N1���rTe�:�>���R m�IS�8���,�$�bN��`���4 Z�Ȑ��M�Y�Xܛ� K�ߨ�V�d�K��$�Djh:-�U`�3%�ID!���Ԙ��.4�5D����J��� ��}'��w�?�����"�if�"4���9 �)V��a�S���nfRD�����h�ܑ�v1�[�}5�b�� �1�堏�j�
M�-M5 �Z�:����fDh�j�&�Э����^p��Ea/R�f2!���Fq�DHp�e8�s�����	g�kWa%��UxAhy�i IX��D�)�ڼ�Y&��;bn&i�I��d����x��FU��a� W�6�����RR�*#�&lAQm�eeEL�6Sp�T��k�&\��>�?Wwz
��e~x�Sv��`�*�%�ܗ)UL\
��S�Q�ypX>��nh`��)�p���E�� <��'�Èk2I�D�D���X�,c���ɠ�)&�M��o�&|����E��]xͭ���\J�2�9��dbq9O�e�{jm��2��3�"�Bj�M�^�g/2~����/�*g�䱁)$��&���y��3�O���ҿ�h��W+ß�����~���W0�X.	�ѩ�C���Ɗ9<�
:���4T�&��h��V�b�W-Tm��P�*k�$Č/��ՄJ�RA5���03�{�NyS4�tt�_�2�����m����������Ϸ#j��ar�~�_�G�*|�-�z _ �����߃?�ͳ���п@~~!@�v�^��� 䯃!��������kLM!��C�/��Aʯ��{��o�$����:ܥ����&$�Pnՙ6֤E!����A����ѐ]�tP4aƍp��w �]�&�S����Ԉ��� 5���Cp���{(�(�t �:mS!<�����G�:�@���x=�]���:��_Q�^; ��+!?QGR�6�rNx��!�$� �f����yޚ� Tn���!2�p���	[�LBx/����f�����n�1�����;��]�{�G�����s�(�!�$ׅ ���j#ey�:�m�w ׈��h[��-�{�	�t%��Ճ��<a���q��SKb�����d�V�6�-\q] g�]��"���a�G|nH��E���1�F2xV�GW�)���DR���AP��+p�|g/�WΨ�Z�WH�3�b=r"�+%w:ViL�� 8�S&�C1R� ����j'��<�]��,j��F�QQ���*��`n�J8�U8/
�^X����Z�s�e�5Ii�&ϐ$��ch�V�>�jF%���/ۅ�-�Ոj�B|����"��(��I�c�HH�!�3�s�P�D� [6r%����`��g��m�UȬ2 I�g�,̚����+�V�@�
h���[D�/l@��k@
)�1ڑ\����lv��Ā�`��A�C�K�VE\�>�M@>��U��Wۂ���&I%Q1x~2��H�BK���FYP3�r%��H�0q�-H����% Kd��Z��X��s�@�^���c��W_�c�!�(	^��*%q��7������"����s$y��k� 啎^��WeV�|��8�p�El�ò���y��"Km7l1Sjg�Ϩ��kφ=�<�����nm,���2nG
�9�0%��Ɍ�<w]un�����c�]��j�s��������%�WZ䉑4�E�9=��;�S}��"@٬���ꫳ��T��9i�nE+aJ��&��t{h��Е�^����ƕWgᤶYA��0��eF�ITbD�u��z	��ݭ�9�'�0-��;9���hm�~P~P~8|X~?� ��p��-\t�����������g�?n�bC�b��6�K�s�@�Ld��L��W?�,fD��bp���xf�������ҍ-J���nZ��0�.]
��B���HeAӮ��T.�фɕ1reC���vJ�
��U2,YQ���t��u6�dX�!G�P^c5���!I���`+
�� 20�REm���4lF+4��A ݌�7A�����9ԟ������/����Fs�!>���R����J�8fn�¸ɧ`\br݁�r�Yq�I��J������fT�ʳ�=��-�D7�7��}_�����jޝ���?D��p�l�Y!�Y5�=�l�ׇXl<\U�ˑ�`6M&H����YYG��� 	ױ��u`` Y�,�#�b�A��e��p�$Q��k¬qDҴ�XJd���4gA��AwoD@/�"@y���Xl�S0�n��)��)I��*�iR���U ���iY@��" z4h�W_���\��JPۂ8�"\"�,m����
J��������P^#h���O�2~ '<�}iI��d.��3.LX�=��]� �Ѡ�XɄ�_S�,��A�j�uHLnH"
n2N5�������`�	W]�;"@y�(����βș�	�d8 ����)��yP��n�M!�p���]�Uhҫ������F �ig+�'���"��1 �����݄bG(��q~��p�X���"��X܁m-��`�3��)���]� 蕋jv��hk����W�����PFs�h�8t�����%�V�ͳnͱ�z)�G0�ݥ�� U�n�ͅ�G�d�9�����;�rK���q��X )h7T� �5B.���P)5��k�<%R��T$�¸bB�(W -��JG@�U�z�쇱\�L�`?,�W�a�4LSi�n0�����&'z�^[���-|7uڂ�XXi�#2�@�v��yG�� �<��\|G(�-�+�B�f*a�0)O��\N`TDX�!�o{E�4�
���vG�    G$�}�X�fx-r���8�Y�v8��[����ѫn1��"� nz�Ӻ��c�r�9�����%��ۚ"xQy��j�l�j�3�t�6��&x�,I�(t,����_k/ڙ��e�DwgSG4a��a��D�:p�f�z��?��=��h�d�[��yOs^z������b�ވ�����|F8 �5t����'��"k�#�c��bp�,��B�Ϟ��>�߼N<�:�?>{��l�
^����=F���0o�N"�W/�^C7�΍��?U/A5��={eS��x�?�.�)�~gMW��ú̵E������]M���8g�󟷜R�bE�9�=��4NI���8gF��v�M��@o%R�7X�"�|�N�����
ye�-�:�N�b ���X%3�i�@���Nh�O9t%�ź�c=h�����E�H$��H[K���s�*��ԗ�(�k�
�f�F��tS4l�\��[���~o�_�;e����{�{��a�}���A}3�����[Ϥ�I��|](�:�����&}���}>E%�S��|Z>�.@�ni�x�:�8N��j��zvF��O����d�t�������Q�񵟻�����ۣ���w>]15��|��[~��������R����|�<��w<Ǜ9{��]���Owhߪ��.P�����aLp�6�6�%������_�׍�zcW�����?v�"P��!��6,_�ɡ;�Tj��<0��3\ �$�m\�<����	�x?&❕� _gin'%:�DGi���[Zh�X�{*
Erέs ��m�m�)DO��" ze�kw�cY^X�{��SCT�pC��sGV�q'��1�Żvʨ��&z�=@>��cW,.*不%�	��h�)��OIRxmc�S��}�~�|�J4afl���I��EE�� ��8� "��l�uR���	�ڂw3�M4�}[0��U�ζ�_��Xi�S),(��S�;ZR�T���qB-k(��v�>�M@>��]�h���cqP쬌ӜHa��z!I"�^�DSY$Vj��lT�J7E��}%�N��.*�u�U��P�#71��A������+a���M0�M =���-���꜈\[�%���I�ui$R1i^p4�ϤZ�0^c5T�4�b\WSX.sʱ��C�`�%��'J���[0���� ��M��Z��Nt°>�b�KGl�X�%Y
>�s���v	���BLFS(���]T��J��Z<Y�0IA�sL� �9e"�I���hJ֍;�	�k8�b���v#<��Ѝ �Ij.6���ep%B������jH�z��-ț�4�yeB>��c��wտb��/��t;�y��u��eT*�xč���?�����K���p�<�����v���;��#�1[�Ć�B`��D��S���0��@S~���D �Jg�mT�6���l����~s�4���)\�g
\��S��4͕T�B	[��@���FG��:p�oV�-K��`i�2ܐ�#A����Ŷ�2kz�p�j�S���^Ǚ[���je�f�T�ō���$NiN�Q27.�I�H���҃���Ȯt��FEn�ڗ���e�l�X�tJg�)Z&�Y<�/�L
�0E ���qV.R� �-�G����=r싍�$-rA
�z"S����j!N�H=�Z2sPuȞ7E���ob�·�a_�GC��d�#��)��#G��qNKs\���m�D�n�\�h�T�_x���2 �����\���RL���C���3�7�@M�"��^�4��
~qp}���<�N����;�Y^����:�pS4�t�k�n����_���i�:{`�Z�?(\�e6�ɶ'�p���Kv��9���A�Ht���D��Kr�s:�t���a�&�IC�k��;p��%�L��v�x{��X�a���٫��ˮ�4u���� �E@������f�D[؞���L4������㔕'F�+Y��|��\+ �R��k���R:�-O��:c��1V�8U&b���}�u�S�+�d��1���o»�uD>wJvc��1��2���bJC1{�Z"�g���� �H�$�v_����9�[M�� �0��S�F�60�"`ml�ʳ�JxXsX&e�|Ķ⮱䴐[ZGN��t�.�e\3��g\���)љ��_��yg?����(Tҭ�if�:]�z"p	ǂ.���0!uJh ST1��	} bDTy �m2�N/��	�!���#'ns��S3h�����N,�5V�)쁭�a��m�/��ү��:'�����A�|��i���=m�4�g�4�KZ[4��D�r�l����I�c` �^*�-��i[e��mJ3&#��� ф�5F�:�h�O���nڨ��X��6*�k�)#��/u��o=	�5,���-/pq9�,r*0�5E��!qMؕ�v� �����c��" l���Q<�	aB����-�M�^g�mՋ�@�&�I�]����m�D�. �ձ�ۥ;�����.b��.X��`I�MS��(p�2�ǎ�ԑ4OS+�,e��{ ��dj����"�o��(��_��f}���Q���:���"�n��&�|5�[s]eg����u粎�5�p�V;gs�Fs��G�2TMф�v/B��!�>�EKg]��o���5je�V	��([?�Ag�aOa�z�V[���f"a�R��&g�D��k�`af�2�!�.^��K]М�T�2�M�5�6����ڈ-�]�Jl�C�}!΁���
$��	wk���0q�}��P���E@�kb���k��9L�r��_�M]c��9,��0�UR��_�$>�]�n;y).;�� e�	l�
Ӹ��LoWk[���v�J�W�`�CH,#�&�)�ƒ�v�j�c�0f�rS���9��7"ۜ�~�������Z�k��������.Y�� ��簂��#�"�{+(m��=�n��Ƈ���P
�\M�\c;��c�­J�dƪHX�2P��5��f�E��s�a�^$��~3$�.-	��F����Y�gC��\�P[4�[��?�O8���q`FE��܆���D-w����N<:��K�$@��bA���1�52ۛw�"�fe.��5�������nǎ�Y�����@͎��\�^�Ӓ 1+ssh��옘�9�M�"�fe� �ۚ����s5�b��������Y�^��qh	6�6�E�#��F��������f7�z%� ��&(G�Z����yd�:��k;v@����)I֋��"@x���{��+b��m ���w����9U�˙4��o�o���5R��uu��:9�)���-	�5��������n�M���e�Ny��̀�ؖ�͋�z�i1
��{�uܕ_�x��C����u��&|��_��3��C. Jl��^1Bv�խ�!�uDfVN5n�w�LG��N�A �OK��;w���:�y� �u��9�ADRL��X暘�i�$���6��Ì�y�M8[p���Sͯz2�������=����(aѷ�z篴%���{nՁ��&�(�/D��K{mP����5;��Ì�~�O[4�vu��5jvM��c>���:"�fe�[{�f��h��5��x[4�O�����횚z����D�V�wpvMM���ߍ�%bV��P| f��H߲\�^��-��������Sc����ͱ�X��v�W����Z4�cM�;:�#��Vv�80vM5��b�-��V��Ǧۆ�^q]G4Q�vS�f����{�b���T^�GZt9Gl����ٯ���~?݀�{V>���x�g�^�ŵ��a��=�G�	����YE���V��ڵ:k�t��筁��S�Ƚ��DLGLb��sxu���SC��`;U.�rM��\���-8�m�h�|=7�zn��n�*,䶭��m�X��YS���uG�c1����-�ф��vr�$ƶ`��zڢ	_�u���l��w�E��
8�^:����	w�k:ܼc�!հ�����د�jI���M�[��9���� c�f�cc� ��m~�mΘ��ݎ    K����ۄ��A�?J�-��RC�~=O�z!;"`l,ɡ���d�3fj�ƒ�~=O�z:"`l,ɡ���?t���gx��{��M�Kp�����ڌ-�8"`k,S���?��[:t:uCl��`�&lm�V�B�-�F�ms��f���C�z6$��X䥷�n�ڐ+G{���"`k,���f6lm�V�L������9�W�r%�VSl��Zz�|ƫ�k�E��g����dS4�j,����2lmȖ`�¿�������<��dphՙx5i�ݟ*x�*Ȉ�u���HKN�;[B�nM�3:"`k4��>�q`k3�l�#l����Xk�,Ɓ����7JiI���X�l��8p�W�f��8��H�l��8p��I�H��[�M�����Y�[��V�!���,��Ɓ�0#�@�)��"-��Ɓ�0%*i5E��X�Osؾp.�)�U��*dS4��m#�y��P��dh���	n9��PD}��X�j�&��s�������("��7E@�X{
{���~�&�D#:g�)���|����-9cؓ:Е�)����4��U�|�E�k��"�|}\�����{~x$�i�� w������ ��s �h�_�}7)�(�>pC��Q�+fsnI�ӘH�%�	+H�
m%�Y&X>6eb&��jgsz"P�1��n]V�%��qp`����^��W��M��Ŷ�Oq`l#�|�P�z'N�E��X��nݟ���F�U�C]`Ri�&��z�x���G�G��xt�1�в)�`��ƶ���m�X�3Q�@O�h��;�0��<v`lƪV�*0ƚ��X}�2�u�������3j"����ccEn�v��gL���G��N�k���1���֩֊�c��M�pt�-���;�*�j�&Bڣ�_Qg���[zP����c$��E��41��?�?��;��8-�>{@��^��c�~��x�ّHX��K��H��ʈ.�\�B�9��xK�|���a���z�� �r;D�����\ߕ���X\�B�T�H�$��ı����Ӄ0)	j!�EC�}�T'���+r*�*H���jbs�P(��ڦ,Saİ;=6: �blw�M�u�X�1�ӘV�a�v%��1�e�s��|V�F����'��kU�H/-���y�Ͽ�������wSa��2?a\�g���?�����4�?�s�. ��/|w�I�
�O�;����B��Y�zy�u�	۽��e�A����2����,'1����H
 ��ϲ�W3."k{���h�;�p�5����/�n�$Z�]��}t���g��?��mx� 9-��_��9�v�g��������|���)�﹟Y�y���ǝNa�}��$O?�??��<|]�[�{���Hg�4&E�X�ȉM2Klj3�)i\Y��3�<,���.�L����+��1U�BWrt.��A�s�:��g�(�a~13�1!e���T�0��ݵ�٥-N���RjI�+I�j��10���~�{����f䗗����].+����J�&x��#�������4��L�<%2g	I@��T�*)d�dY;�,b:�lCȚ�z+dqa�cЈ�tOktKs0�����=�L�4Q�H
�t"(�'u�3����!��44R���=�f[��]�#Ss}�����@Y/w2��� ����ݦv�\�<F���x9�t!ޣ�3j�,$�,�u�&"{"�ٵp���������e�=��ź2��u�64� XU���Z3���T@����ȇ�PX�T&��:fi��=@��!�n�&�U����
�j�^�/���^����z{`���%4j�"�c�gT�$ɸ�#� ���8S"@�Yե4��������x��B��I�KbamL�4Fd4sA��ؗ�T�M�aG+��J17�S ^���s˘�Bo�	��&;��h`V@8~���K�3�p� *x��i7[@ə��h�yo�E�!���u�c�'�q!(� ͓\��*C\�-�����~�TK+�62�7��"�Q\A�D0�N��D��� i��Dj����f����3����~���[�FE������Ta��<V/p�u,v���|�X�����b�sfi5���}|�z����)|�Q@y�������9���������z�� ^�?�/|׿� W3�'M�ksOl��SrA�!ű��9���B`�X��̜Ms�`�7R˂�O��t(�T`Z���ٹ�4C�����/�&�B�YL��!"46G�D�X.ҔZ94R�a�⨼���������9?m�D8����,)������,\G��=�N�!M�3����cmO��F���ц߿E�p<?�C�	:�`�������t���n聿�� P�KAvd]�/��� U�A����1U4�E(���)i�S�������h3�%��P'�'�c���Rޱ��bJ�O0i�I6 ��#u�i� j�����"?���#����O�8�' �c?o�o{2�C�m��"����|iP�5�H-)l�0Q���Ctlc�c�6���tE��֍ڢ����;F�xLmUK܄��V�9t8 Ϊ�˯;��q������-o,%- *��Kmq�~�5��??���'?�3\��;�pÉt��YRGU�s�;����Liٙ�%��"�: ̟��ū���_���b�Ə�\y�`��E�g�`ϫ'��S�Ej:WhK��z��?\�6k��c9~^�92|�m�FtFC("�[AL\�8�U�c��Kl��wqZ ��&|�h~\%x��w�NN�O5��8\X��L�ӗ�߯=�_z�?{������ ? �{���>���$ 솿�>�֏˛g��9�{�`�4^�#p��enr��K���<vy*�VVX��p�k�`>P��^�6�s��t�͔2+&�,�L�uR9RĩN%M΃`�������z%؆FbS��=�p&�D��b)��i��_A4�%��Md
�� �|�(�uCm nV΍�nx�%<�4�+R [)�C1��
�D�Z�/W]i{!Ӿ�s����
A-A�y
S�N���ID����\CM�L����"�z�!���Ik�ip��k��O��zR��|���\�5ӕz�T�Dd2�� b�0�3\ْ�0_9Se6����7M��YL	�'0Q�,'VA|e�*Z���ݦ���"��2���c�W�Й��wSp�^���;ſ���[�u���*�ۿ�"�.V�&���Y�
�g�J)r��@0�)��C&�)�H�2�u>�[�tզ�e<?�k1�M�(1т����"�Y@����,D�h7���<0��l�r�R��[��T���k����L&��"`0���%��T�E�����������'h���	�ǳ�1�z�<� (f��9O!�����R���Kĉ���e���0�
�n�q!cKWNl��f�T7�tfc*1L'�a�#K����)R�4�3��n�/{����wA"����:�7A��5��2 N�*�ŀ��4n�� �!����_:���T[���LnJ�$���D��A���C93xL�r"0%+GyzN�f�e��Q�E8��X�������d	��uC�$Q5�xlK	`�Ғ��پ�RD(��'�I&Qq,
Hp"T3Ƣ�!iK��X9C�[f��t�\�Ah!9�l,�t� ��y"�J����X`��_GP��_���4�Y����V/�4������ɯ�>�~�E�?��O~�ӣF׮� ]��6J�w����t��2��O~�+�������HU-	6f���L_�'3�д�{����\�'�AK�	����^�'�Hm��!�D��j=Y�A�y=��g��]����՟Y�)��G	?~\>�\j�m����;.X ��Pa��xsn���;,te��G�W��b2���T[�%|m��?�B��_� +� ^8�K��
mh?���S�FΨ.ʷ�4��6�A�p���F�a    �G; ��e��`�-�>{��6�o���Ql�p/iO��"xP}�/�|��/�7�w���D+�%&>���|�i觾���T%#�G3�L�\�"xD{��p-�*c$6^)��i0xDO�#|Fﻖ����g��	���_�"ϯ�*��~��1L�fx��~�׷�	US�����6�D���g�}1���W�|V��H����e�G�E��_ٿ�$��B4��u˜-��{����d�57�V�x���X߀<]p�?�aE�K�@i�R�f]j���K�j���{ze0����n~=�*��J������@���г�O�������8��U����i��W=M},,��x����;����pӬ��&R����>q�����+%W�w6�<�5_�*��^�n|w��n���N�UU!X�.U����W�Ҫ����IJ~ٴ7�f4�T@" ԮAv��Ts%�LʪxD�u.�M���d���0�B@�q1uQ�8�� l�ԋ����Ѥv�J@���� Е��`���C��ka�^���ֻ��0�bI�w~i��|O�����cYu:�cC8��u.s{= ��6 Ѥk��l�U ����O���m�Y��w�b��:�u}Г�Nݸ��#����'�|������p�[0�?,?��o7W��p
W��O{�?��m���N�?��N��@v���-�|Q����c�W��rw>������k���S��[{����~�>�/�ܿ�n��>�����w�t�i���
��z6��6���ɡ.ZC&>SS�(6��Qe\lt�z�����9��~��W������).��w�����<k(�;�Mdд���Ѩ��2 <����qR8 �!DY�*|�T�v��|�6���Հ�:X�a+�7��Vp�8�̛0�Z}'�q�^�m\_����	ކt���]�ug㏀�۸iؽ�������������W�Ϧ�R��j���~�ֽz-l��j퇠̕Z��k܂��w4{w�]�!����O��5�%/���몮��c�ْ1$�H�V^d����T�m���쐍'>�[������3�]X�[�.��yBn���_����\�6ӫ��sy�B�Rc�F�BV�!}꧅谏�G�뽥�����>D�pF�����0;�O���P��BP�@�)�Hً%��P[�M�W��;���>���Ot��S�~����o�G�'�U���Pmd�
����ď���p��?���z�n~�5�Qu�/q�-�������'�}�_��\��[r�w4�}�_�>sE�V�w�<!�����^g}���
�'�۶��T�������C�鼰�[��SO����*;�:�����]fq���Z	��S�s2�*2��CdV" ��^�_^2qd}_m;�V��Ή��D@��F�\D���K�KID�*��>�7�ӔoTW��
�O[}|Bx��?���� ��$[E%׽�S[4��7���K����KN�9Lp���0�5[���>��9�-����0�E���r�*�R��K�/7��ݐC�!�uCԺћ~�".�nl;�n����b�W�z1N[��f����K��K��7����C��+8iI@/z���k��^�^p����{P��`C�1�����_����n�� �/�����d hh�@z)����<� �;և!ϐ�^
�-}���p�
��1�C� U��NS\�j��W8x�����X���,���"�������pw�a�O��߫�i�&R��C�_��b�.y�]��ϫv�b�u�3p�����6T�go��x�~�/[B�zЯx�j�_�������k�&���h󂸗T�v��j��@9������w6��\��ڸ[�T߭���6���[bQ��"P�^H��=��yĨ*�$<�E	˺�ya���k��פ�n`1�����x�)T�B U:��f�!�z7�Du�a�G���x_q׆�N�9S��Զ�����K��M�ˉ�v��@�AM������{�s�R�
p�Q<�^�j�i(�i���d?��}���쯩����ˈmv��@5BE�ԡtdC����/u`v�8e'�T'�����TC�����M���RZ��;u�l4|�ې�q/�����T(�����V�Z�cEZ=v8�nk4nb�(���T�r��mK��K�±ξǵ+S7��я��_���v��U��T�����ty������~��~nG[���3?*7�eV�ǯU�o�?]�����go��D��Tǖ�_�&�Q�'�Dt�_����*xi�pT��_����u|u����4d߉�Y�r$\=����c�-vBa�G֗�k�S�,9���m�w����x�����<�W�1�������M�n��e�{��S��R�.��v&��g�`�o�[�����M��7=���&(c��@�hS����%�ø�s�����-�B�\}/x��9�"�;����ĸE^�7o�[��K�k�YM�|�����Y��~yR� ��o�M�+�t�%x��zD쎇&H�x�.��͙m���ַ/�3��Pi�b��da�h ��ur�D�>t�A�G֭f�R$畭[.�p�'r�p��.U i���~�9x-u)�	�-�H���V� ���5x%yy�}��ݖ��R+��gMP���%.%5!i�%�	ي���ސ ���������e��\�H�"�<
�v7$�m?i3x%v��e�ܸ��V��ZtS4Q�����E�]^���/lFl�"�����]L���wX�p\�;�����F�L�il�&���
/�Ey"ռ(`�ƣ���#xӫ���4���`n��ó��-�{��n4��'�س��s��_='���vEb����a�td� {s�,����X��*L}%[;�^,�Y��������T�(�~*}M��Ď8waH>$�?�pwl6q��?�לU�E@g�mU�2��<:��S���Y���~g��eԁ�s�S��9�fEfCQ�"��(d��y��AK[[��[���s{�w���͹�SW��|�<�U��o�q��ϏU�|j)�%9K���Q&P�=�������p�J�BZ:h���~���ev�u�J�z����"�'��.#�lE��G����E@O��w�2�@�V��Qz��:��wb�]d��W��Q�M���3��X\f��ށ�m�au�M�3���_��=��C�(=2P��=����e쁞�豣��4E8��{�ː��x���t�+�3�1����:��89���\�D��#g4[���V����l��y�/�R]#3�� �W|RM&�����M&�]&^��5�J`�v����h*��2���3�H�f��U" g4��Ƃ���m��h���a�x�^0Ӏ��<Pv�Sa���mk����qm���2^�����Vs���*2T��'J�E@F0�P]�^"2��q�풌"z��e��T��B��E�*("�%�P�ב�"������ɯ�Ŭ�*�,ҟ̓�=�n��p� ��;5ʡ��M�DNiZ\g�Y�"�t���	/���x|_WԖ���o����T���Ҡ�I6ԭ�)������b�k�m��T���������ll��=Ꝓռh�Bo��U$;������2��IR5I��1�����QZ�s����Z�{��O~�Yԉ�.<^��s�δ�Ո�Ͽ���o�[�Y�]���c����\�������A��1V�����>����~U�����;�o����]+׫=o�͠�SZ�Æ��c0|�j�͹��o��l�
�����C�E�R0���K�������?��V�
����Q{����/x��i���֦q����1�hټk��{��ww6��f�>:��)���d��ߗ���=�7��R�OI�����?�t�d����M<@��M`���}��	;��ng�r;�һU�7@5Dł�A�]��v�¥��Nb���I���5E�S�;�����)\|O8�u�	�A�x5Y�A���ih���bO5HAr<����F#���d|�A +�~����K7�� @��P0d �  �D��U�;ao���;S�m�Ý%V�b#T��iH�����t?d�e�����y��M���:p������'ns���.�{c���6�/'��;s�Ov�6أn���v�U�ņ�v.��圅+��e�=��aA-c�E�Ê��~�k-�p�fP����l{R�Ϣ���Oy��u�\v_��?��)��>,�[�A����5��=�|�x�|�G�����3>)oM�np�#>�?�_��kS�~��2��G���g~����x �~U�y�������{����>���[�J�����w�[{�9�l��D��պ���q#ثַ�=������_�|v��~��Tf����%6�|^�c�9_E���MdE$���Ay�n��LF�Ù���~rK��(>���/���}8��������p6��X�b�`����3Xc!g�	�J`�W�`��S-� D�u֓����7꧷.�.qY�2��b��|�K�pA�^6�M�~[��T���C�r�S�V/�)`C[��"`'�bT�����?g�/�#u�Osg*B�^��[u_�@�=����U.|���N���z�F�`7<k�p���~tJ����6s�L�����}����R}�8��io��'�`�vo�[~[�3�Z��Sݭ)�����8�OC��Q��Տ�N*Tg��%;�s�s��@���6��졿�o�'��p��m��M��:��)ʂـ��t�e&ww2]��ে�%�G���>9��~��{�?B{���gS�����wj���aQM� ��/�(q���xe��@�q.t�ª:���.8�UR��h"�P<\1�!��~>�)����A����,��cp��b���
\����p�-����_�\��n����ƨcs���� �G���d�"@p(�i ���7��"�"��.��eᾺO(�;�;�%��x��X�����P<��϶i��s�s�wF�r�+�ݬ���.�o���+�鵪 ���o0��c[�!ԇ-��[��H���?�ȧe�E>8��^�����]u���}�nX��4#��[#X.������&��K��VX{�b�W���u�5�IdqN�|yݟ4#��T�����=�@�Z�J��y���W��;=��vP+�>v�wk����������"@},hj���Z����W��tX�i��c!XkM�Ű���k���.6?Jm��:���}����A�"���z�_���ݑ��W�滖�.���h"�xP�X ?е9]����-��-�Z�ԯ]k�K�!_4xmM�P�������-��xM]��e�\r���\t���'w�\2�v6��z�K��j���5����K�֮Ȣ�.1��u�ʮ�/K
�B�nGX��HD��V��]�N�h�x��1T�3k�����5�a��w���2��C���E ��xg��" �ܧ� >� ����x�p�I�V`0,���qX�C{zk	�F���a����aa��J����ək�˥���X��T�JH�c-�e_��4�{,V�F���5kD0�E���j;A� ��ؤ<p���P��PQ��>$�Ɗr����X����E��Πٰ0����Сs��Z4�L��ɓ      8     x����n�@��3O1�5�؎�dW Xԍê�, uS�Ӫ�A�4�!J�D��y��;�S�0B��#�|��=c-�=����tDsZ�!�hB+329vZRa^�ܼ��I�E*S�{���Ż����x�Ǎ(xA�$�-�3�)֔���� ��9�9�c��~�w�ZA�m$:��>�����yg��-J���R�mRqG(har��4IkJi�KaI����p��	�A�ᣃ}�o���V����>љ¹�M\���<�����w��$���J�1Ml0����Q��)��l��*c��#���ʬ%�nv��^+tfo#�X��~Α�h���O.K7���$�ۦ~ ���_����KF3D��?����L+r#Y�ZW����>���yZs�Bw��$�_�G���X�/���s�h��\��T(��ږ8�;�9(�����W�	N��9�fX�\���uK�$u(�� S���^�
�yW����a�kv�VÏoC�WI�L�ο�p�
��(?�xa#��;�?$yؐR^+�I�      :   �   x�}�AN�0E��)�G��I$g�04R)���D�j'H���r�?7�;H�,�=������;�CD�}5�E2������Є*�ř/���l�G|�Roq�����ʡ�^�$�m���z]���&�/��?�-ֈڎ��-����.:���~�.�@}���)f5�L�-h�6�E�3�)�<����8�Q�x��b��yt�Q�A��tz��t��S��3�](��j�2�BR���Z����|      <      x������ � �      >      x������ � �      @   �  x��V�N�@]{���V�Ǐ�f���T�%��(�B[�EB�H!!$$$����%=�N��:,�!���9�=�1�fdƦ���ʌ�J�c��mZ0�M��7����������z݋փ��������C�ζ�wgZ��7=��*S�QVuV��*�]s��\(�Ǚ��*�/.Y�=�:�o��j �s��q���!���a��ܜI貤�-*��� ��>�f����bIm�A���̦e:2��1��� �� u�}ˎ�d���xR�+�*��2?�T� b�`�2GL7�\�p6�I)�rZ��*Ҳc�"c�\#�r�A�!�2� ��3����8U��7G�.+ddR����Be�+��lR(��n~�?2q(�I%�9C`G��um4I��p��2g�3S/
t$��I�Kn�PryO��20�@�d*=۷m�s��$�/�:w!��%�Cቬ��ݸߴ�QQ�7��M���b���C^��ߩ��i�R �m�a{��Z�D̃�m;i�8�ZMTVA��5a��?N�O�����ס�fn�~)�7�5)>�����Id~:�y�b���q`O�kp��@��HΟM_���qQ�Ph�Q��U��)#7�:�M�ppP&������� �� �v�@N�G����|�3dן-�F�p��-�&�1�iё��i�Z�q�����./6)����&e��ҵp�/��+�M��H=D��1����R��:�	��&�/����/�6Ul�𒲚C�q���]���ؤ��6w�\�f\�7tSb�lG����-[F�f�ǜ�� ��j���sY~Acsg����n��x��űG5NG���|V=��T��(��"�0F����i$�Wc���2JYF�\��%.@)�(\a��D2J,��vf�(IJ"�����,�$���&�s�TFI�M*��5�0�'ƚT�Q\��lw1MEZ#���O��v�<�H���`�K�^ؒIm��R� �{)�      B      x��ko����+��$�"��Ǒ�o��M�֑!)�� Q� �8.Т( 9q�ˊ�#Yv�(�/�D�;� �QgfI�\��h'N[҉����g���L� ���z�ߚ���zF4�N⵨���|�g���_�qԁ���GQ.9�����D��k @�	��t8�F�f.�����_glf�&L�2��N�<�7���K/=�t4�ܡ���D�ç.a'�7�p� �kx8~?^�oT`əi;wC���jyC4� ����s�P��w8�G� � z �v���Q8y!���c+pʃ ��.�`�z��q܇σh���Ah3��~����7���gM�2mz��C�i��3(%p�L���H�>�v�3IB�Y��#Vb���D�@��ia{(��-�9����:����D��~|�:��P~�\��.�
���=ʈ�M���<m.��K17<�xRȾns�5�@$��5d��\��P|C~޾A
�7�=�/0z6�G��}�f���[�)K��B�-�7�RV ��ښ+{�L c � �����+*�Hk�a}?~?%o��r(!�d�NÖ�\e/U"�8=Yp���'���}�8�E�<S�� +��2��|�׃���o���lߙ�m��ǂ�d�=&����cO���&���P���K�l�!���YB�d6(X�9B9�����>N���Op�v�Q=�(�7O�؀Oc/����V�{�Rw����D3�����s�A�����}9�M�L²�x��:��:cq�)VKL� ��~0qDqW�H��d��������&�k���"�`ј��8���h;���ؔ��d���=��-�u(wP|v�5x��u#���N��vv��HX�5�IU�<b��w���!�F`��E��$ݠ�6�Q|3	���	@�}Bء�<��G�	EƣC2� c$N��P�R�ϓc�N��8pݫ�i�>\t�����IRAi40%k~S��_''�g�P��I�$�sD�!�:�u�Cu |�MR"��F)�s,���ה���@�.�*�1}�����;e�q�+��!7Su�U/|s"L`���~5����mד'�rtнu�� ��Eҩ\�<�$VoV< �����ra��@��|��]�Q�	�u�-� ,C�aI1������+�C�̊>�	tU��T��=I�W���n�
��j��@��������D�p�Q#��	]���?��IPh�r������b�0G�nC��%����F�Ձ���*+Ƀ�ҩ+f��䔕aǶ�VKY� KG7 ���r���V�l�k��(����)�KZ
i�]n�9S+��n�� ~|����:с� ��U_��'����V����)�MI���'��nL�yD�y@��b��Ūe7���� e��6C׷���P�<���L�Q>�aB�ݖł��U��m��F�bQ� J���n�b�����0eR'��)1C�\���+@�AՎ˃p]u�EAβZ(�f�/�9�8
Z a����"w�W���Z��=�k�ţ����\�;����ì���ѭqk�v��-!��r�imX������Y���B�@��L����$t�����*(ҵ���
�
Aߧ�e��S�#�\�"kYV������F��B?��"�~��Yv͉�_i�����P�V�������.���꼬�D�IͺK��~�� �(9��m� Kwe��dM!k��Y�(-�P��؆�V����1G����T�A�ꮰ�����[���� L-�
����I/)SL��rn���@1B.�f?Z(N� �r:+BNP��[�$e&e�.!��(MY:p=���CeC��k	�hO�]�rmU�<BsSS�E �3@[9G?d�6�d�A���~��d*�,R��Ig��U%�3>�r�V��(¨�W��z���U|p���<��u_��N>�,Ԁ�q�l>$�o��-Jh��FeH
�Ttg'}�;��s�rXQ� �u�ݽĖ|R,��d���+��U�
$XK$F��u3�m§���~2Jm7i�u��{�NL�����
�u�ʉ�B��]�iT�Z\{T�����Pb�CG^�聮��3
���:��]uW��R���
���^�T�Dp��F3�u'����hQ���Z|=k|& ��E�k���V-��j�ڢč�s-����G<]�\aG�<��i!�qRX��(�!��.yA��V�u�f'��U��q�MuѠ+1��>���èW�J�ڥ]��_����N^��`���p�#IR���v���GfW�;vj�_����8�����X1��1��6�܍6�m�?�G�D��x��\�w��}�hWV��=�ރ#��v�(���v� �٦�K��b�zw�4�Rш$��W¶�����b{���������o�0
nv8V�
-o�X�A(��ixii�|ٶ+�|���!úb��+�he������ x}�7���o ���h�:�;�a���Pb~��г��D���5���PH���xa�����6.�{����^y�X������4~s�M�Auqd{NYG#��2�4��>�S���6.���]X�3~���o\}�������˿mI�@���d�%mq��� ��.	9eFߐ�`��G�{HM�#1���3GL)��;�$�� �L�X�!h 6k4T	k�Ў���mF�&�^	q;�<�� ��N-�&����.F�����AZ]�?F��w�~���2U�ĝ8���v&�WI+ �V��ݱ�(�c���H�:�
\���AD�\�@����"Ʒ��'i<��r$��	�0ﴘ��l~�d�DY�fS��9���,�vtǐm4n�TZ�-8� �t��pw�e���Y�8w������E�t�v�i��qs��W��y-����5��U1�Î�xJE������2��G���0�|���׍I˞�������S��Mm9��%1QF*�l�x��Ұ	��IU~�$��v�+@��\/�,O.�y���$T֢�z/�����tZ��qrn�O%�Ab]z�(@og�q�����
������~t�G�h�CPz��J�NB1Z���(��Iu=�@S����M�a�prn�����D9��	�%��"D�'��,�&�p�%
R-��k����}:�E��������C�Z� �d��S���$S�u<�N�h�/`cr�+/�����RϹ"�#��	�� ��������4xؘ���H�דS�!��z��ǫ��[�7x����]C4�����J�;��E�Bbn0�b�: �xH���O\��ܦ(ɖD� �1RKH��l��yv�<%NS��zr�*���T�m�M|})f�J�v`���3������>N|;���~D�p�мt���o�����~{���p���߿�ƪ�$-��������XYZ6l���r�����\c�}��+��o.-�f�'1�� Q��Vf9ٶ}X0��b�̰ӈ�5bVHЉ��A\�.=%�u�UvC�YM� I Ze� !E��y�\�2��m˪4��^�*�äh�3۴��m'��7�������}� "����'d+�~���;�����޽"�
��}�S4�-�z������r1b�[rMF1n1z]ґ����m�"�KedDq�%��8L�9�5�@D�NFoL��W-�2�G���k�Ӟ
�ݔ���ݬ�}{���դ�iG��d2��=���WV����V�8�� �-m�/N_�!�3������~��e�9i&7{/@>�T�?�^��k�����i/�/��2�`�pb�UP_ Ѷ~6	��l\\Z4η�e�·W��K���+U�d��6�*�$��N.2%�ɺ�	��o
z�X�kzr(���E��m����������U���78�A)�@D������+�*U��?���7o.�������r8$���NY �\�%�&�u`������q~� %\�hU�;�R�4�� ��^�j1�`@�����m�8"iyv�XK b�{*6M�}`$���m� 	  
>�A��W��<�0kݬg�-u��-��'2����
�p(�)���}��hk>q�n��n�Rε�2˛O\�K4�¬�yQ蟊�۩[��X������Sx�<��S�R��5�G%��/�����E�_*q{����
�@���׏A����حl�0NI[��-^��~��T^u�Ӯ�r�@�uSx��x��ť�T
�>����R�L����,W�%��#���+!&����!SQ׷x9Y�@��zj�>e���ۑxG�^Cz��~|{���i��O��"i�9("�R�$��4u`4i���r:Y���n3��,����&fxV�J&Fr�n���_A��]6��r%�����o��e/����l ��M	�>A<l˷Kq�"�ԍ�	�#h_�ï7u�B�[��`ipO,p;��f�D�r۲K#L2��9�ӈ���et�ަ(�sk/�J	Do�u�}X{I+M�T,[��uT���qRp$�6L�F��v8�LnF|�_�$�~pw��-7Ƿ�1�Z�\@	"&�n�]��:0fsCYz�<��3���S$ô����bi�+Q!���'������S�v�m�t���L�k���W&� "2&���T�*5��8�h=��L����\�V�hc��3�)K��Qo���	ZnO�_�#��U�m�b�I¡v�q�Gb�j]z���S��O*��)&�u5�0����y���t��i��O��~γ�]<��x�_@��\��X3��c(���?s�z����ν�      D   �  x����jA��5O1Ǆ�N/�Y�&�]��,�0R�틍B'�,���qY�+T���y$e
�C�?|_WMM)P�_q�t�8�C�.��#�oS���)�^�n�Ժ%�����Φ���y&�Q�A�������agNZa5�^&��K?��*V��+'NJ�2!���zD�6�'������N��~�c�:�mY|��a�Op�W<���MBwT,���� ~�:R���3�{�񖵴	��:����d��5
'��-%��~[;�-�asad�:�*� ?xN�� �����mߠ�Y�SJ����Dd�W���\�c�הt���)��0��D$Q�9�������ሟ�/��s^�D����P~����)�z���*a[�Ts�r%
w�M���d�OJ�H�F5V�z��~.j�$2��7<?��x�}D��L��Ф���?b�m4���SF�͵�E�"��;!T��      g      x��[[o�~>�+��HP�%�w���h�z
��U���RڼI��n�Ɩ�Ćl�8y1@ˢDQ������|sv�$�2v�"�y�������rf�����/o|_��ja>��mӞ�ߑ�ڷ���[��1�ܥ{qy*)���>2�/����?���$S�d�Ј�s���?[.�~_(HQ)e���|���(�O��(��v���Α���}k۽;�EfC9�>�-�6�$���R�����j�և�¥�\И�oP����r���=%R�HG��q�4�[,u�L��������Ws�o���ye�捅�k���Wgg��~����77�g��g�ɯ�l ��"[7ݴ�$/M�	-����E��-���n�[v�t݃�5�\6u�]z&E53(Q��GB�O�#�vD;��~B��+ū��;��v��]��K�j8N���zK�9�/O�E�5�����|���g��c]-�	���'Wg�r�������?g�-�_�1�[��xX�!5E�����w�擋��]Ȁ��]�w�T^d޽[1���7�`�����/b{4�m�D$z�t%��m6���뙘o�܈��_G�t��	��9�LA�c�Jơ/��tU�r'Y�6C�.D��q�7"-���]�`.�&��&bRT,�.����̵����񕙯���C��9`9�%j��o��5�ۅ��EK���f�nc�祍�����],7��-��>n�&oG{�X*�Ѹ�mؕ��}gX�L/��,�|��|��lNR+�����J�Q�'U�N��y;L"?~��Pg6Y^���!k`.��a���d+Y4��[8�1���e�|�=蛼-�7���?
�vE��a��
����,��@ӆo᧧����b���������s��ݘ����e|u����W�����p��uF���G�/�7Ӻz�)*�q�KݙW���&�eM�ȱ��7]8�'ʑ��`Ǌ�ޒ����Ѯ�]"xA��eぃ|�`[�׾�ڟ��3��:�[0��5䪲cNpM�6Y�U����^�]��b��e���B2��d�78�t#2�'AnW_��L��=��#��n�%�^����{����JعuԬj�F!�T`�F�Kg�\Z�GD�f�n��0����� $)�c$�+bӾ
��OEЧ1�[%Y�2��������{ $�\Η�)k�e��1�[׵`R��U�7�	�̥^^�G����H w�o�gA���H^|7��ʠ�w�L��bR���~� �92]�a���Kwgxs���">���Q� HQR���N3�G��c��ݶA%��(�0fL�Ŀ]<C�@�8��隣�I�~Zt EI%��O�D�%=K˫��n��U�u E	E�7tO���0���v�����=	��})V��Ћ.� A���ANܵ�Z۴إo�-�Ba��<�Qe��sl�MV��@��+�`��z�)J9Y:� ���+�~0�qn~�R\b�f���RT*��yQxQ��QI�ʖ�9�G�L[�0���R=�����yGj:���>c��{���=,�2G;���j:n��Jƕ��;��� G���vQ8�pr)�#9?������$$K��Bn�����cUM����c�Nчr[�*����d���9���]s��t�: }�RO�C��cRͮ��t|)*UM��Ħ���b8H5�涫��ǘV7��R��3_��[Sd�c��hb]	�p��{{��5�X�7����?E�~J{��7�F<�95��tJ[�M�d�a )vq�����&V���������Q��	��$�þ�H����O�P��`Q�La���ܓ>��4���m��c��r�ՠ=�X RT&���%�L�#I���%�@<�@� �N[~'�4�t�i�x��#�(���u+�ʩ`Rw���o�T�V�[�i���� O	���2�9�U9G})O����^?�L5��L�L�R� Ee�ɶ;k���p���#mf��S�f�<�PNE�z�)*׌�X�v�;�bfk�ɪn<�\����i����6`��A�z���WC�+n�x=��A�z�˱W\]��JwQ�k�r9/� �év]� E���SOpR�Y�3Ҹ��O\C�ٷ�+oFW�Kz��CHQ%�@ �y0R��HRT)���i��8Eax_}/)��)E�$� 2�Wa��- �B��q�ݬ��!���H�d^�J��;��J������C�v����`�Š8�C���x�j��� !-��*����%X�k�.�D"P}�B>���$�z+��q�	%Q�!NJT(��b�]5���>0T$�dx�3�caC�>����L�DӶk��	��J��sI�d�E�Q08����G�G2�Q%\̦>ܹhV�n�o�=������O����5�%�,�K]=H�UK簂K�s�P

�%�lg;�1�%�O0L��l`���tS��[��.����2�i8cH�ٶ�1r�,.�FX`=��U+��b��"�;�;{�b����/ɗ�ݎ�cA��U�0�'��Q�XRT%4��+��Ց�_c׹����]Q EU��.��cP�&�LFK�	�ef�N!@"V�ߟ�����I����PbpBJ]U@�!�z�qNm���Ǆ�c�	����B�j�A��Jm��`�L�����e$��{ёZ�x4�޹<H
*�
)��ܜ��"]��MdZ�iH��n�����ȳl���ЕmKwB9P]�ᱲ�8�N Ί������*�
)�U���)�]]���{(��J��
�B�jU��pI��N]چ�*��=b���ZP:��j�3܉���7ƴ�'`[���Fn�#7,��1VPQ[HQ�a���`ʡH}��U:�7(T�hR�A��^�@�@0�Ò��5 Eu7��ꪴ�j	��͡���R�n�փ9Rԁ�(c��G��ݕI����g[�Tt�	�zɻ Z�btF�E��>�%��^��`�	r#�C=�	XW~�����Ƙ��D_RTw���9���.���Ô�pwp��]��1'�~L(��^��6B��W
gb%�@�/6ߗa����X,~mW�6�q�7���	t����]$���!��Jn����������D�J���KMi��&7^N�ç��^�)jFx	楇ioLP)l����X�(��K�j�v��`$H��R�HL�fLS���6"�9�א�l F(���z[�����R�0 E��8n��W�-�~	��$�Ivq���PƂ�z�K�8��8��&z|Kd��JL{��*������I(/��|�M,Y�ωó�����!��1�G������A׮�v����Ԧ��i�&K��>�)u��w�PRԨ����a���$�1���0�Xed\Hb���T��GL2�b��r���z'Aւ��$ѣH$H��ѣ����x��{[�ӹ$�#Ht��d9G�Ӌ�V�k�[�8L�&�aA���ݺ�p?�X�-�^;V��g�� �#�Qb5��)z;?wI W"᭠�0��>�8WG9�Q�:XΙ�3`�{�b�o;Ph�Xth�S�-'�}����N�Y��l��;:6��*!)|13G")�Ø@w�����O|���2j�^�ǿ�{'��S�>���k���@�t&�؄�*�l�i��b��H�<�ҵeR���Kz�>Hv�n��<�$�:�nt���m�E�l�ۺ9RT, ��U�0{�fvsl0����Q���,*��ʹP޶O�����s$�EY�gH܆�b��Ua�\�z��-Sr$bW��&3I���<�ƬT`��)�������b�vˤ������������!��sD��!��sȎ�)3IP�J0��H��{J����*�������H��� UWN�a��O$�*6Cߎޓu,t_�:_kOϡ�Cؘ��s��P;aޏuR0��.�rA�VC� 'ЖY�$'�*k_N�#k���S�?���۽�ǳ�\Ƴ��`��Dq�9��R�2���H�U�(��Α�E����&�d�db��.�?   �f$����5��A)���m�7�_a\*�����ī�MԊs1���/�c�^�n����2=]L�>Cu3I��b,�����I��d!�����:R4);o���Lk�-�p*�=�eN����M�x~G�BG��yh�/�~�o��N͡Nø��az{�#l`��J�N���/jc��J�$.����c��רڤ_콳�����dG�-�B�\�m #�������͑H�Ґr{�J�zlb�,1�WZwiBƟ����v�i�      F      x������ � �      H   �   x�}�=j1�z|��$K�=H�����	���Kȸ0�W�	>$ڞ������zm�q��lpO�3�(	Db��j����^���"#3`��]e'������"k��)j�"CA�T[hb�K�z��P�ʅK���N=C$k !!Th�QJ�R�X��z�+u��\�L�R	#��>?l�p�3��*�'��[mg��R����;�~ CJi�      J   I  x��͎�����S� �ܪ��/�@n���y�G�G'Q�� ���r��޵W���=��'I5gfE�0+Y�bgF��jvUw���MrH��ܾ�$	$h��y8
�	&��:_��ŝ���%�)���!���� ����@H�!� s@�3PW�R�w-!P�U!e�ؔ����
��si�DS��X���@'�1
] {��f#K�*���b v�s�p3��)EJ,���eMqw�VG�s5մ�)E�8�����c��+�r#�(�S�]��f��/�-�ͥ��!�M)��]���o�]��'�ʵӗ��dJ�%�-
���V��(��T����w��g�w�����4�g�4/9�s������U�h~��߄�</����/e\�8[�彯x���d][x���X�q��ы��Ń��e]�Q8�b�|�W.�����pλw����7~��'\����o�t��������w�tݔ���wk��
���x�%Wp7�]�q˲ş�3>���߇�v1,��7�)���гX�5'��שn��w��6^ꓬw<(|ʅE�,�+<9+�� <D cЁ�	�1��|(�r2�O�؋��'NO�<���~q�o���0|���'���s����l��@A���'�K.+y���.�5�͸1��g�O� u̝�?�����Ѫ�����Q��a8�)[>���̾�����ѯ�ݛ�t�ېQ+.h�Q�+�Z���TJ�$h�J�cz=Z'ؐ���%�1ݗG����H)�{���e�<<�fWg�2�0�r��u"��O�B��=��|���a��y���<]�D��k��"q��Y���j����1��}�-݇�e�=���"��ַ}���
Yk�Ӿ��<�Eo$	��B�I���Ĵ�5�w�����/�HH4�B��4�mߵ`ݫ���V���U�\��Ԃ�)U2Q`tz��ofַ(���q�����E�k�G̑{�r��ia��=����ụ�,����oC�����j娉k�d���|ݬs�F��MS�lBR�vڟQ�6Գ�`�h2�L�y=���ʏ�_ԍײ���*�����5�u��l�aF���u� d��I%�6��Xm��j��^��u>�����06�ʱ>���`ևkӇ���Ս��D ���6��)� �~Q6PM��KP%�=��ں����J�^[VYt-���&@�r��>YR�;�?/v��]���R�%���0�Uӑ,��{��&�K]
0�Eq$Qy�Ղ&�e[U��&ԁTA2Wfby04��nև�ӇYމRTC[�B7M����Xx��  �j�塮�I�i^@y�������#ۀ-����'�J�<L��,*Aggy�!y�.ʃ�� ��A��}���*"��_���>j�\	�v��bzhJ	�i?O�;9�_L{�Zp�M<�{�kx���t��ކ��vg�W���V�<�h:+��Z�ME����S���8����504�$R0��6H��!xӇ�N�<տ.>t�[@��5��jP���M�"XW��<�Jڒ0�Ѱ||Pڦ�����)y0�\��[CSJ��gy��aG��<��Ն/�Q*Q�����ںM#K���
�񺔠�DS�<����ԢVuYQ�K��[��_�����R"�9��,;ʇ�]��*ZY�����H��M�b�Ͽ;�]㴔� � �%_\4Rh^)�Uu��
P��hyYƦT�<H��Yn�W9�A}����wN&^8Z*=RA6���|eH%ۼK�y�ohx�WK&�_���/wD8��WC޲���D� Y(��o0:6���ǻ�j�t')%ՙ�mn��j�K"�z�ҡ)�:Q 3�3�ۘ�{O�-E7A���JÔ�L�L�6&�~S*�q3���-ƦTZ�TΔΔnc��=�� ����-M�tL��)�)���{JM|E�ۍ�ؔJϔ�|�wW)�Q݅�~̔NS��r�|�66�
�����ҭ��@��g1r>�5s:�i�&��a�i�MS��953�3�ۙ�{�i�X�h�Ӂ)U�9u����gmi�o�ױ޲W|�JaA.�fbB�Reb�_O�_O���[ί�R!u�nc����y�����S      L   n  x�͜M��F����y��u�W�6�y���| ���!h����7��#*�Ԥ�=�H`�Gr��⋌���ż��㟟~�?=Y��J�O��ǯ�_���6��_\�v�����7�w￺��������������_�O��O�����������[�w�����/���ߵ������g���w�MI��7�-��]��a[&�"g�d_��{��+WOc������U1���dq�}���x9{�e0,<�׈\�RX�>=ټ[��d�;g@���r�lw�&{�kD.m)�gw�Fr��W�\�R^�^�.l�L�kD�l�,f_T�b{��۷����R��P���W��۲[����%�O����y�e������&Y7�׈�lY��ݡuA;���o�����J�n�o����[^*��Q�u�M�^�|��R�>kY	i���o���j}~r�h"���t�"�[Y����+Xߔ�h_#b���j����.b��!�[Y��_��و����V�:�@��ԇK�D��}��e+K�T~ip����7�8le��:��т��F��T�C�=����w��r�w��oQ?��oѓ(c����Qc@$�1�(�g���$Ͽ!H���+:%�#2�e�5�=!A��i1��[�ĥ޾E$��{�1J����__��|{y{���5m��
������i�ZJ�B$��-j��!A9���N�<&'��.�޳E$���;S4��Ǚh�HP�?Q�����D�F$���3�G��i	�4�r|����-"A�d�
���4�L�+D�ڐ�r�����n�_#
��U��>��K2��~�(���W�������L	�կԗ�s-���7C�ԀXzt.ޯ�'D�d"_#
�8��yy��Xh�2��ԛ��}�|8���qDPo��~��P��;�Q@�ɯ���`�XG!N��w��M^,o�S)��6�%Pq��]���l���CQq�JG�G��ˋ�~�(����/�r7�;5����_%m�ӏ���u�CA�$�]�
��4��5���S^%q�wR;��(՟RZB:�*������h.����Vy���O�m6�g�"o���֧�'p��Eԛ�^�2�b1q�,Ԉt�U��[.����x��yXY/m�~OvN�H�de��<�'i[#��Y���fa�Mʜ�ec,�X�[D:%+��qJḊ��[�(���V*>P)��=ǳQ
P��u�R���$�̃R�(E(�J�*��g$�L�(%(�J�*��9S�P�ZD)C�V�<P��>��I��P*�������ر�he�[��@��9� ���F��V��^{0LfQ�졿کJ��.٤<�l�(�&n��8���67n�Q���]X[`7O�(���1�C�~�<-���Z{�C�*;�[D9A�9j�� ���׈r��j�3j3e�)c��"���N8����2d{��X�6�J�7zo�p׼CT�&�3��>E_�^2(*�
Q��_m Ǥ�o��-������nҾL��8Y�QA���R7��!�40Y�QA���R7����^x�_!*H]���}��&�I߾�Y��'F:D��?������gF�/C�o��_-uӏme�a��
R�����̓��1'�U#r��׋]���;Ά����n���W�D�B�G��z�����$�j�.���Y'kz�!C��Ň�y��3�!��^��m�tQl������֠����s�-|ڋ�?:�����h[Ȣ��=[��3��h[#�r�;]7�;�)Ɖn���B!�l]�{��ƺQ�F�EC.|��>dh��l�A�ȹ�E/~������h�%������	u�7C�E�-�l]}퉍O�fht�irZ�}pJǻib��,M�M4w�^ޠ�v�"�hrn����C�ԗ�A��ʹ��7�u}�u�ȴpn��#v�`�P�:]dZ87Ӯ�x���l�A���4����>|����ȴpn��=�MW����@��M4U���-}Dt�H�pn��I��5)Z���D�&��������"��ɉ���<,�6����c$Z89����Z�D�F�E�œ�_�}���P#�"��ɉƻD��	~�b-�.-��h���(���-�,�,��grL<�{��-�.�,��gr����>�5C��!��`�8      N   6  x��X�n�P}���>�����4-�R	!�!�xL7���@B@ix�%�u�fq�~��_�K83�n�6���q�.3sΙ���CG� l8��b��գش>�K����7me��
���շ�7J���/�Ѵ�P��|��1��{f�"�![<ƧlS��!�	։9:�}�d}������C���\�s��s�ν[W��|p=�u�&+��'z]��N����o*�p��/5���\���+��:�xGoA�ʡ8����}4���,;���%q1n_�# �/ޥ��d��wi�����.bt&��
�Vd�Q�xd��'bK f�]�	T#`���/6G�rU��Z��
�b�ϫs�=H���d��٦���W���A�"����C���^��e.E� X	��0ﲯk:�1/��͚���b��J)�!����{;b#������D2AYb��
��3��@xN�g�Z�U[��-�f�̳S�*I��衋\�<!�Y���R1��+�� �X6?�C_��	+q}7]:-��]��eG��:JwȎ#�3�I����� ��.��ʐ[of|kx~�[��d�����Di��;�>岫4�������mun*G�*��r�B�lq���0c�'<ټ�4��	�U�X�\�x9b��SG�E��1�/*8{R[���g�<�6˙m
�KSPh=�Œ��y/ul�҃��A��Q�e#(wk8�#? O������b9?<��t��,?R*��e6�-��C��q��޲�b{�p�z_jq�6��Ҙ�l�����FF�8��v_���瘫h"toZX�4�4���_į���! ͹U�b����6���YEg�ԇL�P��I�U�D3�3sp�����aP\P��I�:Lt�x��xg�d�;ܤ��Z����Z�פ*��(��b����Eɣ\3�.N��Kۧ��~�J�;��\�2��|#�}Rh���כ#�Mk�6��g����#�rF���	��F9�A=䲴K���Xp�E�;�qة��t�@,��1����9t��k��ռ���ѡ�\";�[����p�/��%�w���w&���      P   �  x��\ێ�F}����Y��t7�&9o��7A>f�7�:�g`�=�%���l���@��������]]d��`�8�x9U�{WKN�����fm>�/�Y�����������7�ց�hO��|��hfa�����dޙ�fm���.������NY���m�����t����+����Ň����|�Bs%C����"y(dM�����qI��y:QB����*	�>��@&a�鿊��4� ��B�kbՂ{�ǵYn~�����.����f���Y���{w�� x8es�����ᑋ�T�P� J�O̱��r&�8L���t�4�&)�M�>��&���7���Bs���qos7 fPރȯ�?�{� ����^��~���z%�� |yj�U���檋1:HT�(�� ��8�_��x��
��=�[@o�;��l�Ƌ���I!�</Q�����N��S��)�4ᅺ�Te`���'���W`y�u�S��7�8畹Rs+Z���"��3�8�h�H�ڏ�.lznJ����5ې�:r��H�6��_���sJ�U;�a0j���ޛt �� I�8v�i�D貉����[�p��U��+�aF�wꆠo�I"t�Mߐp��[[�$�c��]�y�w`��xyd�<�pD�7����V�&�G` K��z%�'�ۊD�HШ�Y�gA:�9��9q�JV,i�k%��� K������Q,_C +|��z�ك��WQ�̜o9�BU�%݆�$Yhj���Y���]��m�ҢJT��$�'�b���,ȼ GM��W1�X[�E�!S��ޜx�׭$����6I|ODn��BH �n~����>|�lxD�fl3�n����$��'�Jj΂\��^�����K���G������ELN�}��Xz��ZVX��㭴���H֚$Ȁ����ز/	&"�C|X)�s�����a�I���*LaϽmc�nPzC ��àd��k��.Yy�>~�NC����S��J�=�՝Hĕ7�F�1g̮��H:�$�������.���+��\��QI�*�0u$rM��y��T٭���B�#0�����+o�UP�
Og��Z�t	��q^!���u.��A	V�蝭�!ـh�@)d8��r��~�#FP"+ĉwU�K�U��ykI�
�O s���hު&4|�"�:*h�(e��>h%E���aٿ��j(䖇΁��y�*�>w��%8��*f�%6<�0� ��	|�� 弝/�*����"�'��d���Q+�$Mc��F�L����ܼ��E.�)X*�¨���$^9��фƌ���W��XB�"[s�z�^�"G���E$@�N�Q�W�a�������M+&��<�N���᥼-��-B,�0O�K�wAR\T")ݏ����$�D2^R��Ƨ�f@����'!�Y+[wv��o|��à�Ҹ�ҕ�}��#&�ś� oꋷ�ժڈDxc��<�餖e�C����H���֙��1c`�#�,j�Z�\�j�*�2ޮ�ʮ��������թ&	 �I����JrD� ����3y;�j;K�_��d�Vi��Լ�v�~��u^;�Ƶ�g�17�k�b�2�۾��pl^�t�]�&�!	8��\��y��j�]�T�4����c G� �z@���v﯆{	~$�otI;��r#�SQ"M3�:b�f�_������K�p�!�3���w��|No�Vt�E�Q�|BE���|�=�]���~iB�ºD�:Y�volA����:"��(ʘ��S�d.�BU�we�0,� Y�CI�Y�����pA^>r�h8��P.�h8�e=��8����ѐT�r�_!-P6��$Q���h��[ւ�F�d�FL�vso4H]�tgeZ��ݒ,4����|F�-�z��+��c��J�N��k�d$Gi���p�)-x����=�;�ˀf�h�l$¬��p簺!�M$,i�pJ'�R�B�
��]���̎�<3';��-L����z
Ue�Z�6E�i�����P#��Lj���f�O��!ܟ�9( ��X��pkWK��D]�%���*ڭ���n���7a �E$�N����������=��J�ljbI���WѾҬ�#�Q5޽�,XG�)���֑����Ŭ��}c�6F���΀�ز\�G��,ur���c�RIB�
�ya^���*\�a��LҞ���ݩP�q$S)9}}Y��k5?�dI�QU]7�݌��������O��8T(g�
�`��^�3i���g��5�%�p�h�6zg�[��x�?�dI��� ��*�UE�Ϭ8Վ�t�H���R�r�v�TL�؎�%Y��C��2��hX�|Fc����1�Ҝ��9�9|��X��o&�-�d�쓶�ݽ.����L8�X�
����Ru���=l��D���S�_����:[-���{>RǼ���N���SŞ+lJ���,�r�w�H�������+8�}TdÐ�ٺ�/u�-$���t����
�)��a���:f�ؗ�@Zx�=��+��Dy�W�;2 ��$K"K��G09�.���Prua�� "MqsI�����S�ݖw
��8
p���fng��sO� �%MqcW������CB&����7�Y�:�޾�:� �W�"�Xaw���Av�.���
-���0��d��_I���b�oᬕmY�
÷�`�`���`���Ck=ٽ9�����|�eK\��s2f�P�7c�n�A�%�t�3����0j<�c�G�j���$�t�%��O���۱��<�>v ?�h~d�E1���:-��ӤX�����w��0�Я�������g�#���b(x�r�7y�7��S��#���0V������|97/J�"�N�L��r�Rco[��ԓU�s���$O�}�lsu�2�<�ωY�ejO[5������r#�y�Y�Ǟ@`%�I��#|ˎ�+{��q�t�X�������w�`���t\��4���N��=������Nvܔa������A��L��;d	w2�d��.����";����vav���+~P²�f�y�������j��1m��O<���2��&6�,��YG�b������<�U��#(t<�u2�S��|��/;h��2�K$�2aW�x�M�ҽt��Km�8<���L7����T+-���3s!�bgA���X�S+�
!1Ș�Ĳ�}�.�j@m�S�W�&���%aS��A���<�j��>�����0�[_1a;B�ؿ������ի-Q�W;���7�l��/�7q:�N����[
��/n�������9q9���J��}/����S��eULR�h�o��"����U1�ݗh8���ύ�:�g�B^��`��F��.I�q��ղqⳍ��-�P�v�zT]g�1Ve-��K�E���g�9_��{��i�J����A5��t2�u�tA���X;�J���RU��ȃ�.��� ��)��~)����脰_���zR�4�6�N��.���      R   �
  x��ZYr�H�f��V��  n�C�	�0ZZ^Z���
�l-��r�E�(.W(ܨ3_@�D(�3ݔ�@eVV./3+��O��ڙ��.��������4�c<��';����N�t�_\��U�oG�p��N�}9��)���u흝%oh��~��>�>����c@�R����X��irӇ�hJ�?�}��$���9}3���=��^���<���x�+�dR��Q�S��{AX����%j�Fq�z�!���N<�I�}QV%��,�B���M���/�n��@2q�~��� X������o(�)9MOj$�5�s�"�����ʷ��=��i��0�4j�s�N�i�ʇ������Y9ݳt�!��q���bW$��K-��,,d�Ie��rѷ�rm��f�r�_]�-}}&�V�OIS8}�1He35y��E����0ɴk�O���T�.}��'Gl|l��|::&�N�ެm)����ś��cr��ņ$�� ��%�d�Uv��o�If���;��II�<f;����gJ���T1|�7/�A�َ>D�����͜0��+"�C�d�rkC��uE1��U{����5{���*y������5{��3�k�����g�H�'$���������=G�����d9}��d�}�\vT.t��'Ć(],��Ϝ5���v**�ot���$�*�	q�{�'gay���u�1X6�ϒ�5%�p&X���	�=)�d¦*� �H��4��0kq�q4�-�(���e7��s=��d�6{���10��a��wp��j�x��@��x�.M���/]L=�dBJ?R��n�M��SC~A�^=�dB��_1Yj�j��<K0%,F�ȱ��9˨�9q��+e�8������<��1
��\X���K�����2?�8��E��R� $E}K8���c�z�l�_=���k��:����{�R��q�
��F��Ҝ����e�2i��fR�k@Oj ��B�ْi�DCY�F�v3=��NM�|{R��E�0�������Q��SH&j�pd��qy,;�Ĳj���qĎd������'�LDQ��KN���j�����I��Vf�[
����@��b�P�����Yϑ �8|�Pha�/zK.ƫyt��B�L��Ϝ_�Q.4��P�`~�K�r�y�XP3�Y�n�~[�����2�����㙅}\�|GO� ���-�c�S��a0{6��Br�n�7�V�<
�������t�����3���Yb�U�+�ϰǣ��|L�bK$��'�!��m��Rs�Ե�]ٴ��o�ةqQ,*�~��&t S��,�߾<E��ս�r��UWS��L��,<^%\��aW�.�mg&ʙGp�x+���h���#��-5
1��|^��g�b]�n�l�Tѫ��Y^H�����oB�r�x��`hC�(��4JVr����W�����n?�ծ+u�&-���V{����_�p"!��@n��|�]��$ӈ�È����A�'�79��LA�y�Ɩ��u$	�4��0+��Ӳy�'����3Q��*��i4ח|����n�|���A�BK�|I��^�x\4��e����3�4�!h< t=e	/߭LW\�Wv����,�
SA��L��]z�����K�
�4:�[t���@���>�1�2���G���Fqhxd��H8��HXH�Y�Jپ2mu��-�>�
���be!�f%�x�� ��WD��<��5�x)���C�R<��祩N����#�ȷ~��U�"��3��$�H�=_wGd��w�Pǭ ���i��Q.��V�&ǡ�@2��Ă-1{�*7Q��������DM/N�4���E�������K̯��@��H��ٱ����Ï<ޛ�`X:�T)%$�7
T����p�]�ۉ�a�(Bl �f�H�|�p�&�e͈�7�3���A7�����Ő��$e�v���:��CA�r-�r��������Q�q~`"}w֋�@��P�(w���(<�Ѓ�C��r���:�˛j�i0I[J%�(Z_�Ӹ5$y"��F�ie�r��b�\>"8�:C�#?.�x�d����̐��|���s�u�3T��,�2v�7�x�Š�tL(#��uK�bFd����PGB �V�JE<ьr��Ƣ�u�@�3 �V��i���-	�$�Q��%�h\^@İ�LI�8�c��KW��6�N��PA �V��X��R�py����O�28h�Cg.�t�p׫�J�(�^�ʂ~���B����]���̓�qW��P�ӳ<�|���laN:�}��+�\ˌ���4�t �iq'pWlԍU�V�ç�L)����4��C�8�q�|����/�".���&(Uun���f7yLEleo[A �#1>�ҍ�Asg+�%a�/�\.i01�-���$���ڼ]Y/E��A�$N_�S�u:'=3��~):���>D������,���4���}�M�&�{��g��>�r/�Ȕ������%�.P���s���G({	]�|aш9�S��)L���(����1��������\%�� A�?��r�o��8I�j ������!������ʕ��I[�[W���|�x$UJ�(�K���&
D�m�v�lE���c&FPr����Ϻ�z���0�e�3�GB�H�Z����3r��Ԩ�.��N�?yx����B������2Ut���9�Z�`����c����4~ڄ.�Jc-�b�u���<?��!9�;�e8����Ti�><��Q޹���=PI�ү�Ƙ���^       T   �  x��\ݎ���z�LS�]Uq�^6��b��$	!�J"�'�ܳ6�8F11( Dl���e��zm�Jy��W�Ir��g���j���vl�;��̩��:u���!�V�f|Dq��J~fec+�������Q�7~��__6?��N�S�h^������^����a���|>p	�� .܃O�G߇w~���C�ּ�Aų�W�k��S:"xDINXEˊ�Bb�4f3 D3���g@d�P:���/Ğ�({!��ls=��q%���é������6;]x&oׇ�m`y8�޺f�i�އW��L���m�@�n}P����MxW�����^�y� ���.w�!��G��(��-��L=��g8�������L����C;u�r�q���V�Ո�g�m,���Y��wV�QN��x?4�������w�s`��i�0�F`�q��h�����v!�Ih��(*�T,�tF�<�
]�J4�Y�"$�OB��B �.�*x&'�,��a��r�"C�$��(0���B�g���u�i�u\� .��B#�2�)3��]x�_&"r�Et�I=���[.G�X��@��A\�%_&�x�rt�ŗ	�(�e]f1.B�Z�.�F�P˄b��*4�
u�@�$a'�
��.b�Etᑔn!Z�=>�oCj�̻9�uY��BƗr��&]݁<�^}h��]���ts/��a�����|")�*et~9Q�s��!p2Uw4�MY�g�R���6������+�6�To��f�Ӌ}�l��IgI�'�:����k[}芈�=�USl@���%�B�^�yv|��AX���B��R�!�� D	;1��@�9�0B�E瘃Ǚ4�]�����u��ٍc��?��ʜ�
�J�Bv��i&Yb;PC��`hk�o�!�2)�=0r���
Pg�I�cUaZaY�t� �y&˞I2�p��B,��E&eϠ��RS:`�!^fR�L�!��T��Ѿ�6��̤}��|�E��o�!�2�{&UФ��������M��xZYQ
��w܃�����]̞�i�Wf"邖̷Յ� ɶd�WB����e� $��u>���Q[��2����K��B�!!�m�2j�BH�ɶxH�����f��> ⶄ��@��0�E]ߕUN����(I��z:ӽ�m�i��&�݃P�3Mz!�8����5@i�y���ރPI2�Z#����S�Oa���>M*�+!!{�t!T�L�� c(`Q����*!#,U���~7�fw��� go4�f�xϤ���^x���K[#L����߮Yj�-x�~���g m����ٍ�k6��3��3)F�އ���{��~��g�{���7eh�w�G����L��_o��?����f�͖7�~N��ffH��\�*!-�7�۱�m&eS����^6͏?���z#��5qو�R�!V'R����	���fӅ���#R2
�D6a�	C����]|����_���f�cZ,� $!C�L,���	�@���R��qx��e�u�q�w.^x������a�,ѐ?	\(��hB������6�������>�F�X�g~%ג�����͋o��Gw�>�$O���g�9i0!ȭ���<y��(�_�2�OB��'ҙ�?S:qyL�/}AZo�,�?�O'���VU��-5�(H$�v���IDBS�!�)�C#���A��^F�t��z$�ά��zPӨ
xPB�8>C"�Jp �(�Q}�M�w��9
QU�AH�]u 2ׁ�Д�N� ��O�3ˁ�|r�ʐ<-)��q ��@���z1�*S��p��<���I�>��	�r���y�Cy�	���iCH�T:����u�(c��!��!�C��i�D�6�4N�3Áh�M�L�6����j���#�+FaQL�6�4M�3˃Xʘ�f�L�6�4s����;�\��	ւ��df8Kr���@�چ�6�Y0>ׁ��-Dh��!�K�g�p�w�hI�ӆ���|�%O��U�ami�:`�f����M�"��mi�*��,�s��cs���@@lC�`��y��|j�-ֆ�ٺKdw!��BM�20fm�]��A��C�<�4*�|��0T����D����:$PB��De��fU(�!`$Rŝ�Lr���@nֆ�DF(�:���DWҋ��oC�G���Dr�5�����! ��AN$��5KC�em�S�H?d�5����KJ&8�A��7�o�C&�����;������Qv�q�#�b�nʡ��gys;�\!#�ޙ''�3"��f��RX?Ry�gB9?Y�r{�뾻�"i�&�&���������io�Np;��c�d�y��Ȝ_�ͳ�1�Y#ҙ�WI�n��7 �7�;9���"�cΕ]:>b�2�uw@����PB��Ӄ@(Xu�v�҄�''��M�K�_�x˳N�v[�Pt��i%H��_nz��N�bZ�PK�(.��~�m��ÁݱgEm�6}���lr~d�~<�I�\X��ן{�«��]����m��ƞY3&��m+w�Sr���	b=��^���ݴe�P����*�n�ũ9|HD�z�Z��`0���=�k֮m�����r��x}�c�'cDE�Fx��/0D�$�T\�W^z��A���w�m/������z�-/��\�bD�D��j�~��B���$�D�=N6�����`nJ��;>�6"]meGI�:�"Q	f���s��u!Ѝd,���dr$���R�Q_3b�7G�j�ߜ$zeS>Z��8�Ql���z��7cg�=�������]�ӟ�9�Qm���z*�~�څ�9Ke�/��m���8�y�|�	�@?x�{� M���6�g/�VVW�67Gg���N��/���"��ڗX�8�;���m���p}�u��+[k�3k+[���o�B�����`�Ci��.å�i<��\Y�:���"L�D�e*�/m�o4.r� ��H�a!�36��Q�i�FM�f�"f�Ξ;��ޝ	�*�����p�M����]�SK����o������Y���ĕţJ�v�A�	��v�@;}��:�[��"�	���sک�����A����p�����}��w��09 ̕�.a���7+�!(mxz���H^s�q؞��4��!⨊�u�m�%���>@�2i��%;�)3�~jekkm���O�މ-�ɋm���i�c�C3_�������Z]�'/���m��s*���P_7G�m�dGb�������W���]�~�Pl$&^J���XB�QV�qX�v��n2�4�&ŭ�S��=�`���ʝ�{� W�����Qs��e�v7���I���7��X�����
D<+��V�]�A�c�eF���6k?����ێ@��|��ĩ���r<[��d;�5��gx^e��	�ŕP���e���d|��2d%]Y�c +��yr�"�"���/GY���++}�ee�"��e]d% k�)���Zx��aY%xAY/#�B ,a{���v�叾�MB�;\�A ,a��K�����xtUa ^/w�B�+];�K��壯� F<ѿх@W�q��¥�Z����1���*8dm��b��Mf9�z�a�yV���^[a�c)_�{"�v�.����̃�X��ylB���&��|      V   �  x��S�N�@}�~��t[����XjB/&����
H�_��#�������;�2g�G��
��֔���(7��QB[ӡ��^�O����~��fY�J�oתm]��F��/�T���Dh�S� ����_m-�&�	�0�5���<l��+�У�"H4�DgXvi�(؎̓�Ӌ�T�����M�Ԃ2���2�Q�2
�Tͣ)�B�5cl��ސ[��q1Ό�����!#qI����Of�;e	'�bH��:1$��.�K4\�`���2v�X
..F`�L�ڒ��8�7�EKf�%���t-~Ɖ�o��/�����ߺ�(�1v�e��¦ű=`k�a"��>]�y���o��S@�L�0a�˪O,؆�����*��j��r��q�`��Ɠ���<[UЇ,��9~.�k�KJ���t�*��B�*�w[R�?} ��cW�����vc��N�`̉���=������]E)����      X   N  x��T�n1}v��`��ދ?�/��~L�H�
A�@�T	B�������~a�G�x���K%xBI����93gf�#�>��Z�g��X���a��(TI�T�"��\&��i[�M��.�Ɗ�K:�����֋0��f��xC�k��.N���0ژtb@��`���3m��:�d1�L���3~�g JpZ�z'�zg}j���EOP�]�Qef[�F�d�1yP�lǊC�/b��T�i��"Q=6'�����㧈�.�e]��L}�U���5M�Jq������������ō{ٕ��f�ש�E��=h�]�9��,�	~�K�K�����<a9�§�H�h&Tn���l�m&���R��8�T��:�o\�0<���Z��ʵ= �����J5�կHz�����p��])���&�@��Z�C$E���-k]�}� �8�8�Ǻn�W�'�Q_� !S��jє����s�؆i�C�L�S�������$N���%U��6��uz���+E����.����uV�]���Y�mB�q�6�9�@l������
�D��'T[�:ט���I�cs�����y�@���ι�t: �D��      Z   �   x���Ak�0�s�)z��k�7O=���)�<�x�e8�^��(�)�	��F{�C<�!I���^t��_�y�%�pr���Z7uW'Xw�{7���?`��?��F�2"E��^BY��<3��2���T�O$�{�wN\<���\�}ώ�͵�dl������}Ö��Ŧ{����`~�A�'#��A�	��?X��0��r7=�ŗ�aY4�JڔZ?7$��>y,��.��      \      x��]ݎ�u��~���H��[�U=w�K�\-�ܕ��F��8@� �d�1dX�DE��$'΅�"�%����
y��S�3��U5�3�K)E��p�����9U�*�)�I�2I3���J�|v���͗����������a��dr�VE�y�M����ϭ��_4�7���h�7O����ٿ4�6����5O������������JHy�;�?1x<���<������o�E�<���Ap���>Z���|5�,����c%%%���&\T��C�Q�:lQ���ڷt1����d�~��� Di�SD9QλD���q�Z֣���?��RI�(LFͩk``�50���D��h�mg��<tG���c��m�k�6�K=,逮x���E9�!u
��jU�l�l(NΒ8�(׫����Cq�d�;QnV�)V�)��4I�(�롖��[CZ|fSDҦ��B�����p}ԡ���Ig�4Y����r�N2����<�����%���vgs��@�w���?�~��ڰ�ͻ͇K`M_۵=H��a;�3\�!�������m�<�^�h�&"9�8QNٸ����D'�唏�	?-M��4�D9�j"NEY��3QN帚���D�&V�S5�&�4I���(�z\M�ii�'3QN͸��S҄��,<�W���44���k�a���	��}�ņ����u��y�/�vZ��/�=��<=~�y|y���	�/�+x�G\��{~�|�s���E�� ��H��g���9Ol3��,�e�hҲ9Q����'�OC�y �'�h'�Ym2�H�L��2�N��ݖy��7�_�v7�vsW����c�pUgV�z�Nϳ����03es���N�pZ	�5v(�Uk2� �(A�o�ְ	��ʶZA��T��m  ��_9��1���e�����w�%6O�Zџ̂�����^s������5���%,��5�(pFJ�ho��^s{Ȃ�PM�&�ª�o�@�spX��6�Ҭ���5�g��8��s��N£�-�&TL��$�7�'�,���
g�%|�#�+�~��o�cy�y�h.����nK��=h���O�(W��]QΡ�����TsF� 񸀎q����W4GE����͇0�܂O���E>j�`g���w�U�q�I��vg{��ޤ�X$�+p��0}��Ka�@wW�ƆB�����.4�*�����<.)Í���"�ޝP	=x�"�0�,�ъ #_�1F_��p��ƥI�;'\�����]?��J��˭�I�}x�v�n���X���$F+���Q��G8��P�E�/Ң�j@tTX_P�R��f������V '�C؉ �^��K�u�hc�
-���É ���E��f�%��.�d�2���t��]�cd�&f+5�I����G��I�#�꺵�KÍ��um{�\�p��|LK���~I+R��K^6�	l�| 5�������Cr>���m���Vs^�{�RLH����Zu6���O�N��V@��n��:���w���s�;��_ނ�Y���s
xNU�}��(��日�b�o.���~]�)%ْ�lI~"K�A�M���N�xl	���E����ʡQ�������q�*à�)������U��Q��E0*�(V�n^c+�,Ò��:6�yU
�򕬫�:�Ԋ )�L��W�V�Lz+N �f�=G�W1�F��/`r$۰ 6�1�4ZN�<�I���+�,�neT�,���eZ������4����ʆ�#�6��^�o�x!��E�*'��Z�.T�_�)�[��R�⋦�6�a��KM���/�y��Rmu�N�ǿ+ �g8w~vy1�Ow�^���ݒL���u]��ko���J
�St!�0R��:"@�GCH �Y!̥/�f4�֫"d17�#��h% �@�%_���ǂ�-@��B��g:�C#A��9@d�B��hE� l4k��W�h�}����Gcg*V�3�s���9�ᵃ�q���;ݹ������R�[
�&{�0��k;��v�]�n�S��~�c����X��wD�N���ߠ'������c4�\�Q�Õ���k89���������U�핂�in���儂e�Rt*�tD��[_t��#ʅ��.��нj������ޢ�47K~ֹ��t�̹��[�_��w �45�IZ7'�������,�|�R'��������,o�&��N-�h�]��f��b�q���N��Q�nR���p�è ����,��"���;����lq(�E�R:�}�E�fw��'/:�����&=�����{�]:��П�*3"��c��RLd]I@_(��L/����*����(բΚwU�-9l�u��a�r�ź-���_	�o��Ƽ|c����VL�%Dڬ�G�W� �"���϶��񒄏
>F�U�L��pSq?��rm���ƙ?�1�n���TY���1�΂�`�5��]Q��5����=l��3����v���+"G"�F����
�E�!�t�5(0+R�ƣ@�C���P�P��hG�-���O�����㨋I	z�����P��Q�խ5|dG�s��Z<m���h�5��V0u.�T߃5�hz02a�=Y���D�=j�n7̜�+�$�m��.����.>Ц;}����|z�{��`۟�}�V��s�˿�?�1��'�u�O�9��:3*�NݏAq3a�+�#�wD93��浉����q�̆eF��=P�V��x����/a�u�<��k��	��,��w��m!a4[�"���6x�����6��d�P�&�~�?U���!�ћ�фU�ph���<�=x��|��T��D&(��+�r��q�0�]��Þ.$H����-/hZ�ų��	3�\�P�H�L��hS�8�X'\k�G3�D�+���^��2��n�:
�.����vR/@�⣱�(��Ga�"�Ȩ,�3�LI��/UI�,Jz����v|Ҧ���+k��(,G���ޚAX� ��
�������5���.L� 6���P~���vP|QΙ����k�,j��ʵ��e蛤ݘx��s�X=��FW�s��6��08�8^v�r4:�F;4�l�fY���J߭�� �͠x%M�s�E��m�fЮ������"@�7F#����}��Ј�Ѩ�hB#� ����&���E�Fm��E����E9�s����E������6�?��94�"�tH���R�@0���N����@49]:Q��iW�Z��Y�i��y��'�Sv�_.0��`��W����y�(e������-1e���r�t;3�=�E �;�����;g~����E~���}����t�p 8M�ə͉ `w֗'�Wv���Ѹ{m��^ٿ�(�V��6?{����\�W�ú�\?�F������i[�"�b\H#�k�����F�����𔒸S�W�Rm�#�six�N�vA�>s\�yh|M�x4��#xzm�^e�I�[0��\��%�@'|fm��Q,�|b]�xrt"�W�O4I�H����E9�dm�vL]S�'ץO�[םb�%ݠ�I%��OT�I [��=�S��	� ߤ��)x���ʀ��m`3(:?�O�I��VuD o}��*�2o }<��;���p0	�[�g֥/Zt��ǃ���җH՛� ����"7�6o�.}�e�h�mrÁenqx�K�5��ɕg6�pt�ŗ�4���$(��9��3�)t2�r���M�o7�"�n��r�dz�&ە�bk�G1���u�@�����m`8`�bR�u>)��͉r����L�z[n�/�j���Mmb:d�@�۾���Ujm/I%����:�^��v��61x:P�@�us����&PQ�&�غc�*�
<�L{9zκ�r�#6�:1��S�Y��2��X�U��ʅ���+����	�L�^����&�T&���r��_�-�[�- ��[@:�`������$�B��p�R8tΏY�B���� ���	�ėolH����S�(����PGX�Ԙ�?߈D$��6�:� }  �6�V.a�" ��`AMn�L5:SM�U�'B�s�B��C�:\�P5G�ZT�b���36��{0=�2�QuGH����'�'�U4���D��>�K�q�常�P�i=Q�Y��;�3	��Ò�a	�� 5�'���]
kP+.�;u,�2:�(� [k�6��QI�y�4ؕ�r<HdhJφ�2���%��]rO�qv����	4$�}�J�Q+	�����B�v�iB����W���?�㯊��׋����f�k��~zX�bo/s����_��v�| R�!���%1��+_��h�"�IDSY밪�"3"I�H"Rx����| �ZZ��LsF�MN�� ;��*q6c�	C5հ���WZ��C�2�O�"0�M��X����rV{�#q`��u����ʎ�Y�n�hL6C�E�W���6	SK|��k�����PqgYI#�+lXa%	6�b�M<D�5��f�E�D��	���'(|#(Bs��kc�#��|�Nې8�yNm�����p=��%�fQ,��K{
�y�E���][.��N9�|��q�jt��	�)}(�Vi:	�eP���-'`a
<,�}(�Wk9�s��In��H3Bd��re��,�,%�\;�0�_:�ٕb"9VL��ѿ�(W���;�t��~r�~�'�(�"N�r���9}Q��B�5<c�Y��^#�v>�J%�KY)q�r�2pBQj��������b��~�V(ʵ��:U>tQ�B�"�W(�\�a�Y�<W��j����D�&DW�G
��\�S��+R��0|�����J�zr�#��2BAW����k�z=�e��5;����?��hDcabV%��՗��l�����K����In��v�~�ݞ���i��VC�*$	tS�Ӥ'�k��$����e����G0B�<~�ݣ��[�u:jbɈ�To����5wSE��ׯ�T�̚#�Xa-��󢟧ͷ��+`ެ���u�jKX�k'�u��o��R��,�Ơ5�D�z=�#���3]�0E~�ۆv��}��T�]M�G0�c)nv[3�	ݾ��ny\�Wy����n�؞���nZ.�|��[��n�Db��$a�t�
h���K�F1�K?5"�xN����{���g���g}+��bqR6���7�-1����d?͵�����'���A%��qY�(�e�E�(-�h���lS��Y�>x�	&\_��y��[K~{wGx@n7ʓ�@7��!
���T�=��MlVV�N4�.���#�'�T�?�*���S��Tz�
^�Y�:\��㡿�v³F�������� ��bx��Mc*ƣJ�
�tM�E_,���p�#Q�Lbvᠴ�~�����{�VO5���E@A=����&�h�f[��Ƴ�	/w˗�����ca ��l=������)9�{�l)`ֻ�ܤ��r�y�l)�n�-����[�g��ϖ����x!��LHn�.]�s�Զb�T���/�Y����֠�.�n9�29</"��~�}�|"���.W��� |��x��P�Q7F��j����,��M��?�����Ŭ�ٜ���ͳ��P&�[���`k�q����.�+��D9_�
9�(v�Mx�<�8��C��S���=�x�E �v '�ŏ'��qKO��/;H��x���B�] �*FO.���;Q&��`�4��&JF<1;<�ɓ!����=r�8�7�
��3���Df�˃�)$:����Z?uobM$6˼T�/�|��S���hS�c%K�2/E2�։ �%K�|O�H�L([7�='R���X�� ���wD�o��%h��A���$���y�����sW�7�����"����Vl�TsW�GcUL�^D�K
�U�����Sѥ�)1�o��D�6]�Ѹ��V4�XI�.5K���Mja�)|Æ�Nb<@3�{�Wd+qDg�©-pқ8qW�C7�����sQ΍gh��d�"��P�s;-�to�����ʝ�e�.-��P�� ���4s�:1tÆx�uv7�a�9Ǉ��ɻ�/V�4���U�[���Ch�W�}�S�֜�	U�$��
�Q��#|6	�c��Z�>	ȴ'�&�
�Z�X��i��ӁfwB��J�\�x�@
��i'fcVx�{yz��S�c�����/^�v� _Q���.^���+��%��cOp��F�1� �gF؉hϟ;(�SX��d����۔�R��;xu�@�Å�/�y=�]%��U�a:���vf��=y=�U%0��__��&N�"@8�M%�8}��JF�ʯ�(�5!^��=%#��B1B�74�E�P���Q�"LSV�nf�jyV��@�}���f�]�:ҙ�"P����۔��,4�WeT�U�	w
�	'	��'�]�9���8���00����E��b�j���2��q�qSiB(��ި����/���Q�|����f٬|�Ă��?1{��+^I�k�1�[���wA�Om$Lb���a[�n?(l�w��i�m�A�V3+���=��,)**��䋀8y���hc~�8:�1�R?��F��\��勀7��ru�u��M=tJR^���2`�Z����o���#�{� W�.0:�,ًr�^{��O_��/_����Lx`�/���ݯ^O��fl���O�m�`z���d�ԑ]$�&i����"`{��}p.Ӳ�f�����r����Ou ��l�Mv��&����{�4��s��t�z4����B��P���г�E�Ww�#��YgN��k�x�� �}�i�A�6�t6<b�퟊dK�s�܊�0]0gN�9��qrF\���4fq��7����r_��ρ�%~������4x[�v�j��:�vE�p��S�{�LK[x^�̸3ω��/�ü�>CjBL��]_���A^����;^��ȣ�ɫ����K\_��A^h#:�Iђ���χ<��<�ɝ���	��/�f�j�39۪yj}�?t�[z˽��������]r�GO��>��Z��5k��khA9f�1L��W���¿Z,�w/ذ��Re�����8��tV,u\�?����]��̺Fo5�n�`F<85�Y��ӒP�@'1�Nv=Ϙ�כ��>~9~,r���^��B�!�����G�����r��Js�� <<��0U7�x��e��l��OᏇv�r?�=�H*��o�nL'&��*�uT��I]�����D�_,�S�v�y���v"�s8}a����|���ȯqz������1�����6�T���k�X��+tㅅVk�GD+�t��T�ZuE��
��_g�dY�� �����e��F���@=�c��x�%����E�C�,����޹����Q9M.�&z�����Z[����j�D�F}Jjl>Q!V�FP�?*z�\H��l��jwz	��qƃ;=	�W�� =�}���pf*��(2ʠ�|�D`�D�GGj����qݲ~ `%:GO-�]�d������y1��!�ɿ��4��|�YG)��RA[0{R��L���D������&���v"�Y#M�@��Eo����U�����1��ioGN�cχ��J���S�Ջ�����L��/�T���j1�v �B�w�/=����Y|��p��߱U�G�;`_'<��w���{"Щc�\���r��5p�zk�5Z���v���{"�������/�����}�j��&[_���ŃQ;�%1���\(�C��&^ӡ/x]+� |��]��ab���ow�6�uԞT��$�'BaT4�@W
t��^��3X�;9nm�;���<���kk!�]����/-��Z�4��`��F�B؝+XJ���POZtlkMl������&`���E�_����lq��lF�.O�5�rY׮�1+�#o~?{p�U�*pw<��J����(�Y����1,�/      ^   �
  x��[]r�~N1�vE$�O�"U��!g�(�ڔ�k'�Z�%������"EkL��0Wؓl�`8 ��
�S[^J�C�k���u7$��g5kսZ�����5|��-�4Q�f�D�Q����������lќ��HM�����͑���cu��y�Sx��S���9L�6��C�q�K�/�1���g�·�ڋc����IғqO&��dr�U��*~���D�SM#�u��35oF0���o|��{)�b�[
��\�{�i���.K��m6��� PS�*�B%�(a�. Μ����}�>	0��>n�-<^���W��Ai-v"b�O�����V����fe�� ��T�Zz�'�S� ���l6m~���>#0�1Y4�^��"��P6h�X+�U�DԸ|��Zo~X�Ca�Z
����D�h��r��� �E�բݑTނ�@��{�$>>��p;�G�$��L"Q��c�Z;���XS�G�:x4�{�x�Q �
�n^7E!����N~�p���>�(t��1��eA��-걿`j��1�͡c�篃��:��q��.�H������9�-X ���9}ҶE#3W4DB�1^�a�K����Z�'K�c|���X� �ڶ�
�~]sֵd]`f4<!��G��悎�,�҃�t"C$d�t�;pt Ǎv���H���ͻ �-ME�����j6tk�ĹO3�$�S�T  n�޽!�H$�������@�7���Q�No��֙"� Q���*b2�L�
4gV7�z2O���p=�:���@o#����Q����1,�����.Vb�D��EҚf�)i���+hɉ�R[�+�����}�z�agP�D�?�Y�&W��q��<#)��^���� �t6țE�P]#v��n� ��u$U�N"���(��`���d�e,I�4����������W"� ���K3��5k@`�R�!��a��F�"���J$R"K�ǫ|���.v��~�O�J$�ēɭ�<$f��4p�3���
�H���f���4�ɞ�%f;7��Ԣ$�U�&(}I]�Q�� ����;Z�H��lT�h	~IvvM�|��@�r�-�x�V$��]g�d��I�GT�[�% `�D���sқ��f%:��嶥�q�����ӝ�a����
��ͦX1'�2D"��O-�u{�E� ���ø�|��<�6�;cF �}t��Sc�D^P*C��Z=c��[��	a����: �)����!9P���ZU�#z4jM? J�#UI�ϝ�����z�.3���R��+��m��~��J��!hԄ��
<�������|��(��"��j[&�İqL8�V��m8��e꫽�퍨�i_v���Ձ�?(*�o�z�"���1�j�n������8 �c�U/����x�s��ɦ�����ID�%�V�ӑ�;�����'��m��	% <����z����-���_،��tC$
��V��n] �v�I�s���H�^(C���^���MqXW$�$��6<���寮!�iFn_��؜����"��m�����ʦX�3R�e �zOcv�ej��!n��m��0oW�u�g�$i���=�7��8����S��
�	]��K4&���9.NH�=�Uj��������"h뮓�Q ;��܅�� OapFŲ�)t��7?�z�|N�{:�m�t��r�7�m�%��cK=��b�ߟ���۾�x�9�>C~�]����F�>�_�&�Iw�yj�W�.�� >�������m��u��嚴�m��:��]u�j���\7�ߠ�+�U�k}��Gݢ�	�'�mr��]��L���j��b>V�tsC$d�U�m�$�@m�����������d{��D�ܡ�����GGW���(�J�6��\#��n��}'X�R����еJ�H�t�L�EE�K_O2�}�C+=1K�i"�V�aU�%urK�H���f�@�E��dI->�����ήP��_}���lV\��?ꍫC�"b��F(3��E�,ޢ':t������ݙf���#�7`�Ȓ�}�W�����-����.�o�����2���^V�S������?�JG�b�'u�uf�
�,��Q�,��V�ɗ�m��9!#���!�d����S����f"����5�S��gm��L��s`���)���"���rl;�%���w�95�+�e����!YJݜ�G\�Ú.����UꨋNx���Q&at	O�8�B��֖0��{�����̗����#��Џ�=�Ft+gLnv�"t�2� yV�oH|�#�[�hF�a`��/�"�#��@KdGgn��zݝDdCC5g̚�N���C���o1��!���&8pˀ��W0��@�P��Y���,{r������i�@�������iY�'l��s��ƨT��H���)����lF�u�Ms���z׏���&O�!޺���\G�ӘZm����-�k9)R�S�_�ݦ��RC$ri��H#��w��_��p�l�N[J�?[$E��j�Y0!��,�H#=-�*��X$����h#�+}zzu��&�(�,�e������\�"Q����x��:F�2ۿ����k;Չ�>�뺞a��׳L[�w]P6E⻾�WE��      _      x���ݎ#I�x�D^XV$��;KW�43��n�����I��Ҵ0?{��?�U�U�ݭ�Ъ���vX`F+��L`���Fkv�������̝t2��+�H��1�c�|���N���M��o��|�~���*_��]��_���W�b�~���|x��}���j���6��{6��}�%�����|��d�w�~�~g>�K�;���O�����g��K���`��7��62�����u�_������(��
^�?�)�Qx]��?������q��3�!ԯ<��$��M|�f����=�Y�7���|��;���0{��S��e��N���})���V�O/��݀x�"��H�?ޮ_�߿�?߰��e���Q��bP[BX6��0����wC��5[-�D��5�˿�7���~_��_<a��g���e���X�9{͗|�'���$��'��(D�O���$��$��27����n9z��K\�7���X[�>����Ǧǅ��`r}�~68��æz���q�7N65��W7�K��{�0�wl2��|!@|�O���S�~X:L�������3a_`G ����m���}�O
���k���: �^�s ���ەM
_v(�@�x�+���pX�87�%|�8/��_�����#�����;���=A6?J���~��]�����?�{��F��W[[��=[�9,���H��G>�!{�T��k�w>)��"\ż0.� 5�\\�����nС�g���c���8�+�9<= �9���l
L.����*��������lް�`���݉����_�M���w%��-�Puh��~�i.���ߊ��e��ˌ�P:�IJ����l
���W����\��]�C��;7�_�R��k���oɅ˔@�#;Op��g�>�pF+�*�qw��(�+�"��=���UE�U�"������Xc41OyB
c��H�m��0~%��vP��$�dؼ��BE|�Kl(��!� �������a]������>ߠ ��Z���W�ͯ؛�3w�77{K��V[<#��$��5�u�t��l��UkW�Ȩ�̇��2��`��]����=�U�(Uɯ1l���CELƴ��(�i�&��Ai�)7ݝ�@FLM�m3�Q�睞�fW�S�.wҤQ�;afO�X��o���Ҏ0��Bz|c��r	'YW ���+�Uz���<�3oP�BGfvB�m�+�`�es\��_��hIf��`�ʯ�2��)Z��Xe����f�����f��C
3,�t�9�%��t`��%������g��K�0��S�� K��9�'����a3Ph*uF��ҘH����������6ݥ��������x�_C��a�-��*�]W���.m���g��3��y�I�~��N��o�oM!Uq1��O�j�9�_F5�}�zT��Ys�&x��=��-6sLlX�ѝG7�(��\ ��۹��@'��Kx�˺�QS{0��|߾��p-q㫱�Z�1�����|�&�f1,�0�kq[�;�R��\M_�e?轲�� �@�����!쟞���ꎨ;%�ŗ	�����e͋��M�-�̇g�� �s?/J{u�����.:�O"o��jR��A����JŎ��m�@� z�sG��_��_���>�h�	��
��qq��<��9���(�M�I�	�e��	=�DL�
;"�3��O:�X��T���> �̉�mP�fM�����~��`�Q��'?��'��r�   �i���_�m����\4�
C\��#�J[�(��bӔM�Xfo���ZH�M2��;�����MB��^ۓ`�mڑN�x�9e#wjk�hq��wGq�l;x� ����Uو^
��@ӎݰ��@�S )��ewa� ��ަr�N�� �h��N٠�S�@ h��\`��9oG6P �@� ��ш��Cd4&CL�Q� ��h(	����'�/�5x'���w�X}�����%vD@F��0ĥ�r4=?9�ɮC���Ҫ�K-ʍ��:Vq�X�/�y߻�P*-�I�_3~�� �RP錎ԁ!.�����1��Y�śHw���(0/����*��%��&��G6�a�H���(���nu����".���4����/�1w��Q�xS��%Nv��c4�s�F����P�f�ap���)��|鸍}),|��R�;�^:P���������_1��ͻ���&l�]�&����H���P���0iym��H�� c ���ІP�;�P:a��c1˩Mk���!������Ls[���.j7=�9����E臟�����)�����W���.�`�@��_��II&w5@=�y����+��+M�m
ż�������m���+w���!�d
�ՆN��/�'���v���2a����B�BP8� }hB��!ԇ"<gM��z�Bx�A�'�壑"�MN&�F�6[��F$�C����%F�?@x�y|�1������6&�hq�4�NƓ#OqD#������iCx�}����k��Մߖ� ���P��x5l�.�;��ǡ��gl����h\Q0"(��@\2�Ip�zX���q5`#t�hf4���j����%K���� 0�`Ӽ �`Gz�ā����4OC��X*���D¶�����0�%�Xй=���V��df��
FӔع4{���k ��T��h�"K���!����;�[���!�`o1�bӚr��!����;
.�m��.RJ�Ym�Y���c��6tONƑ?��ހ�j[���0cv�7�bBlA�-�����І���[d��8�	h#���A�,�*���i���v��/pG;推}@�2	��.<@���Y)&Oc͂[�rq���D��hu�8jz2�d�ߪ"H��jw�k�#)1p��g408��M��0I�G��(�L���sk£GQ7�o���PԀ���Eڊc��:��Ԁ����.�?�H��P ��lA�
A�H��pi��$����>�o�3�
�G+�Q��-A����#��!��#��c>���eo� � � �xD�8�z�	�:�  ��� �RwY���}����N7l+;f����ˀ+?X\�o���0���dz2�Z�q�^37�a�����:�d����UQ��AJ�5�mt��K��	��U��j�Zp��[��J�	6�r���"����%GM���B�-�]���f���$
������ݰi��8��U5�-a��(���W�6�:�C�,0�9�A`z���f�c��Pz����eif�
�;�9����K���/�AB���>PC�,���~Uj	5V��j���	��h�2U(O2z��T@�=�*{$���h��)�ǜw��P��C)�����ᛖV$�*�ظ}�EHTsTC�]��`eQ�ڇj��&�^s�jU�m-3I��p�y;��`~ ���î�����w���D}75������݃�Y�����nH��ހ��`�z	�}���h�N��S��J0lД
 �8�J*�8f���8`[�;�Xy E��L��RC�������>���fLX����A��D�5���C�7��(`@{���8�Y��a�����6��X .��v�6��3�����p�!�D�F�6@���m��%�u���ID#��B�X�O߅��Խ1��o-�C��,���2��ZH�MD$OFus�5�f�[���h�0�!�g�o��nw��&�G:�'�m1��!Xф"�ܠ�VU�{9��_����C��p��?�߲���
"���Jl�Cx��߆́��HEY}F�W��fj�szD�O�p��{����C�]�{�w��#&?x.���5Զ��!�u�7rX���0���c�%kȔ��FJvؒ�W�!�t�<
��מ��n9C�~4	C��u��a?2������Q�l~4*C8uKT� )Dc� �<������b�    s�n�9�=np��C�h�(R(Q�H���C�� k9��wm������߉h�2J�~�z�ۣ��."vV��Bk�܈h��N���$s�Fݹ�\�!0�"6�%���8f�$M>@�$���8QK{t���~|�g���i�'����^��_�����Ӈ���5��c%���K&Ocm�Dɥ{�M1eWx��;���z�R��J�;o�[�؞*�<@�ʜ��v��S�Qf}��|N
��ũ�.0��>:($*������I����f�O|Lc(�D����7F�t��НƗ^��0�#p%_���k�_�;x���nW> �{L;?�H ��0���x������pBmk�S�j�
(�d�*W� 6�'��5<��9 E��a��٤1�L�+CH�;T*^��a _08��D=_��f4��ǅs(8��s�#8z0��u.��
E���|1�j���E�����C	go �~��|.��qD�ؘ���)�9�P���k��D?����|T�d��<.����G�2�V��`|o��M�5�V��4� �H��I�g��{��L���u�bt[�ˊ��������x�Q��?~ ��W�	��I�$ &0�?`QU��a���[o��-��7�=~�n��j�KƵ�1g2��Pݥ�v��r=ƫ�,�aa��WP� �\{�X�mp+������+N�úE��Pz� ��/��l���eSWwy�'v��Ӛ\Lj�؄��C�?;�7뗧~-��T{&ǺU+1[AT�;��y�k:w_;�L1G����Nɻ���l�m�n�]�	��B,�(\V`K0zsgUà������]�8j��uaV�em	V���]�ُ$�gҸ\@��T��YNPn��EJ��ɷ҆p[X���嵤�%�{��}�ߕ�`�Պ��~�@-a�c���?c�DGu�s���r�J�7��A���{��$o�j66޴���5�@��i��D��0�����F�D�EDP�jw��|�Y!�1\c�͐6����C+L3���Paz����6��j�]W���`s�~����{�<
��cf���)�u�Q_�<S��N��B)Qb9,D���B%t�[2QK|���:,����U_�th�U�ɭ*�PIx	K��J�]u���lK��$So�Xό��z4��H�g[�ת�]i�_]h�Z�\�5�w�[�0�������(`&��#�����֪Ӎ�*{�t<�l�qZ�[��+�Н��I
#d��=��38�RF�M�~u��Je��á 6	� x�׺ˉj�K�V#�L;�ϡڭ�*�E����b�H����ͼ�GC�'Q���HTS+�Uy
p��&�a7���T�T������9��6O���$����W/ݽc�ǀ��"�v�$Q���H+u�WFG�k�*�<�- e��(/��L����Q��i��Ή!�	��LR%�����j��#E˥���Eu�P��A��,@9I��a�9�*�/�5"vl��|V�g�3�;���vQ(�N�=�I������t�h�݊uH[�b��"�aULd��"n��c�|�?�n�̶*?�_Yo�]	�\[��b�y��7{��������B0��>�d��8�"�{��m� �=�����s�6��ھ��3�G�S\�Z��ʉ��R�n�����ZvG!�w���~� �;Y%SUy[��=·�Ҿ���]�'��3��Ͼ�A�K�P�
2x2��w�O�蔮�7�ռ-+um��5�(}(G�FM�2zӱ�O<j��v�z�]��4�1U�G�I��L��$��S��$\~+ƴn�礸�FR�b�p� $�X����-d�R'u�!�;qN��|�9Tp.�B��|߰e�zp�o�ş�5�T~HK����u8��B[�cx���*�f�/L����~��Z`����ya)���*�1�<;I&�
ԭx�0����6*��E[) b���kf���رU�!�\�#�s��ᘃ���Š�?�z�8t��x�VJ�d�ˊe`���
rߔ`l��pަt(�t��֡���!+���HKvȲf���3$�c��m4E�46
*�5�`'!@���9ɟ�BX�� $-v���f���ݧ�x}�`�\�K>�_T�fe��C���r����~��Z76��0�w�s}+hP� Z�n5��ٟK��AS]��4t9U�e<u��B޳����<W<��S!3r ��X e̎���K$�K�7?V0Q,�n�R�"��}��ZA2�R�y���wBV�ʄ����i���7 xn��"CD��Ѿ�V� ҈���$I,�c�4SYLgRP�<r�y�&�!�q�4R�71y�y1
�1=�lk�����v��0N+�xG��^!�d�yU�-?�˟�?����f4ұZC�^	!<������@���Hi�&M��7[�'<�n��R!@bo)�^�XZ"=�fގ��dJ�t�t������߈����Zxo���%)Mi��)�B�}f�oJ��"�`�.UG{ ��{֘�/|T��Q��V���~-H��E��W�&�s��CE�?SY����Է����� �W�5�6)�9T�J1��!<T�Q��8�OQ�Q2>�0��UC��Fe��W�3��z��,JZ�(�Q%���1�EY�J����j����g|�ypﴠ9��y��u_�����oeo�?͝7V�ֆp��P��ߵ���o�x[��ST���l�������H���d�"�D���6���7���d;�x��DrQ2](P�7T�A��7V���ĭ{���z�\�ֆ�+��Jv�@�㶸�FʲT�X�5���o"�O��n���5��gXI��n�X�測�v�gtw6S�h��t@D��y�׎�����*��Y���q��%�CP���+���ׯue�Yva���njo�bz;"�700�fX�'Z[sqUsGTH�$t���E�.q�o��lF{3�M�+�n�z{&�q��hx�z��m�̹֯�iח짘0�6��3AMG�x�L��� ��X�2�z������Ã��:(�QD����?���G�m�����S)3po�so3���j�:j������)�+po�{����Fg��]�֖��f'�H�@�E�����Z�c_�@⸳($�)ٵ^@��ż[G��{A�}�n�s��v���dn��I�ԴR�����G�a�o�5^F�ŧb����s	�}Đȴ�+{������l��!�}�7�F��ĩpWű���[`k|f�Z�RP�%�������J������y](V8"�/�	:�i�؉���ҽ���J�M|˗n
�/���Nғi�m��U��,���8�H#��ԆN�a̺���"[��*��OG���ԬE2v�ֽQI��hfc��X�:�%3o�e�g��/�D�Fb]��Ų�xf�!����Doz���jV���y�#Iۼ�[�Z9���ՀF�'Y!��uD�G���%�nZ��\�	q�ې�l���7jY�F�_�^��n� ���.��O��� j�bW� �,�隬��i��mQޟS�mL�J2�3�N���v~#lm-��}ι�����8�]�G���2�V��Άz�,i��?�<-�ϻ�h�-Q�@|��t�hb���)��aZ�N��F
�̬C p4ED�E#�Hf�t����\�{�{]C�r�S�C�EU]�b�4��l��\��h'�"�h<�p�:�%CLEb*BLE��p�]4�%JwyGNL��D���S�VLEш �u���1V�����8� �1�iY2�!�`�N|�ݪ8��%d�����ƞ`g��%��'8���Q��IjC���	��p�#�Nك�̱#sL�1�j]ܳ�ol#MG�����1T�
��9r�eZ�'���'�6�3l�^�Ԙ`c	�NF�l�O:����o�b߈%�@�Z�N1�8�%Jk������A0�����Oc�c��%��R�j��(c��t�kC�~�Aj`P��U((����z�6	jT�,&SX��7�ZJ�fP�W�+B    ;����	љ�.m��ߪ�n��b�&�\��G�%�m�e��t��ٛ�m�y~��n���%�k�+�u_ۨEZG~�i��4b�]�u�}�%�Ua�#�!\$K��xq_KaA���Hna)�x-���'e@L�)E_Z��"�	��S���J#T�����B����U�Ӌ�@vD�p3Ȫ�p���.'zU�V�����y0�ΰ�o���iI�m^m�Т�G��ч�A�쪹���ì�%SU����g�؆B��Y���Bnz<??^TIkw�0t��'٤�>���pLu�;Ù����!�`N}���#�B8 4�7U�_4��� ]K��KC$E")ȥ4E�iC�ɘ-e�5V����-��a�]W��LƮU�,�k�*��[gq֥��� Ȓ��8B�Ue �Q<�V~܊�q|A`��p>" t	����,�;BN�mf��F��ý4�/��r����&���ӵ�߼�⋬��	�����6�;�5��RLa�~��M=��� y~���Z��X���r��?�O%"���[�M���`��b慰h"�r9&�LX�x,�*k�o��o[��X>1Ui#����=;s!�-���]�Mr�(2K���%m�-����,qC^0%"���jc�i<���؟�Ÿ+$J��ؗ�m��u�F���Y�ߖ��@,J99(�t]��*��yOG��N�fӶ\j^.�,0+���y�s����J7�-���z�)�J��ľU�1?{��.6��$���WlW��lb����W[�{����� �ҭ��),NgV4{�/��-,� ��զL�k� �S����v����n)$��v˷) Fy�r�=�u�Ի�u��[*���s�\Lki{ۜ��ٷ��`��D���*�r�1�Q"lblK��NF'�����Jl�d��\�$1�=�����˻D�T}y�<j8 �e��a9+7�V{�sK���iv�u�u@{�������Gba;��7����h�@cb1��X�XB��]S
 P/M�e��n�l�8�����,���Q41U>�GC�����ҟ��c��Lf�6�lg-scK#7�c�Kkm].�k��a��q���k�wZ�V)i�B�7!�)�H*�
��-ث�@���|E��>�p
J
��>u1]9UW�d�jC�g"o��H�c�r���a��	�p�/A�oU׼N���^?0�s��,a�~�>5����#^�~��
��M̶����h��v�@�N8�v-4uYl �l�z�!`�<�4�߰����{v[���V-�]:�ޗ��h
�Λ9�s�{�q��L��r��9��]�q\�9�E�C��v���%�>Za�f����zA�@�z��b�hkk��`��e1���,�-���*+=��Z�`.�+~0^��p�6��|^�A��#6֡ԆPx;��:�gb�
r�N�?	������lqL��!�����L���0F'H��������^�J׽%��#��B�n�v���XP;��b4,�-�^_�n��b�6�s�Nw�ɻ-��M�$'��{Yj#J4����}��iY� d��Jg����@R���C���n�K�NZA���������9���B|[�|�����ރ:�5O~K%�#��:���0~��a���珆�/��?�҅0���0I��o�CKr)����G@YWPt���\�E@#��dynU(��)�\B�:����u?���&)��J�"\.Z�w%Sj�� ��Y]�O�]6Ed%j�D������� ZQS��6t���b�^�&`I�X�H-KW�>�7�6&��G,� � �!����e�'!&"mm�4�T�RI-a���!T ��q�TRB��SB���ڀTt�R�\u	�~�c�	,\�]ˋ�1n�>t�6v�������0e��C�1��H�hN�PK
)@��3��ۏ��γq�����|���5��%�'��~Z�V�[�� �Qy������v�ѳVS�l�t� i5L��@��C(ǞMe�R����3SV)��Z �d��:��gê|�j*��\��0�+s��=|�������?��l�.�;��]�C(l��q;4�}��6+�*=�>�,+�>~�|��7�H$#0]BW��Vk:s�4 �y�ӆ��k�ݮ��s���[<��^�*�*2Dr�L �A4���l�����+��\ d�K�/mc؁/�LWF3ƺp?P_H��G�|}��t�.U���k,�-�W]�F	�/9�B@�G2Q�s��e��� ��9�|S��D�)����k�I�C����0�<�H�e���l���~�l���q���{��Eͻ��K��e�8)_�JwFss��&������<�������Ξ�Ʌj�N���>��k=�#0n-1n��d���7J_��qk`���~n0�$Jx��8h������!��6��������'ZS�0}�4�0�6ݘ6�½��_G�)�`�`��mc�@���p|׳�N\Ϧf#��N�F�(���I�V��,M�c�.��kAb��������e*���h���z�{�c��aJ�W|�@ǃ\O�lE%Mq���ɡa�u�ԙ�)��u���*�ōB�]�"~B�CmGx�Z`�Z�c&K�;��tGJ��i���߾:H�!}U�����~���<?��w�4F��)ii���O���v�{F۾�J�QX̫�����t8�l���ci�^WnNE�q�?V��T�AIӼH:Q���Σ:�Z��:a�SJ�fBi[�1%?��I=�EH�UZ=~��D:USr�}қ�j�8=���Jsu07�ٷ�17��RƋ���a�2�i��P�SըFJ�������Oұ�"f�09�;�Nyly��!)��������>���V1���W�o��B΅r�x��ה�S�g��a�_=2^v�nАX��Xr�e�'J��������yWjZ��YI�)�N����W�f9\e�_�+�
Ղ�C:�(z�����|�r+�J����C�ҩ�l  � M���!���_�7�9E�ߟE@�7^�	Rvy5M������s�.�6�\���XW2����s�?�{ZU,��/A�|9��P��'��k�\,�M_�����$�^�2�*�2�O��bd����uWم���
�=A˂:Ya
��ヾ�ʭ������ٶ"�C���򻢗��;���&s�IkL5Y��_���Tl���ڝ�s[�vg����T4QB+���p��]~'6��Źڃoպ/�j��'�P����	6>5���C�~�[���H�%�-l���BבM�q�`�^�QTWLKȶ��pTʀ�c)��"l#�Ɋ@^n�����Bl�8�[!'�۸2�Z(�I��P'ˣ�˙��2.�+#S����gsgOc�F-r�I�o�9�u͵{KvP�tE��mZ�ֹ�=���3��цp�;���y��^5��쩻������hC8[�J��j�k�5\���� 0��;�fL�UX�<�>�\p���@.X�z��&�Uʎ��e�Pӷ�f�짿U/�[�K��>x�i74n�1�(��+ZaʒӇN'��t�\;3�c9�	ֆN'���4��}=�}�4��D3��W���i�m}���V��S[�ю����=5V��&�Z�+(	�k \� ��X�͖W�p5%��C(� �6�4f�]�r=<ȕV��8N��f������!��eםz��,�Ou��\��ю�vذ�q�l�W��l�]�:�<�A/k���3c�6L�5?7����̦Lj}W*�O~2�M�C�S����)P���s����/2�sZ?���S�f)]6�w���l>��Ҭ�Z�����%�-}C[��Y��B�і��
ҙHw%�q�cwm����B+�B_��!���(D��[�;�\��ʼ^c��!a`xA2�L{}�aW�d�Z�\�"{��dt�O6V/�CPe0���"���a2v������k𴂧<-[Okc����ie�d�<��VF{Z�L�1xZ=�����Zٮ�)�9)4��f�96e}d������'u6���9t    WLL�6}'����.:�漃9���:#u��'p��D�_���<��W(�B��
� �X�ʇ�;��2�@����c;��o@[�^��� *^�W^�"av�i����|��ЛI[��A�ޣ�:���C��8A��Ir8�Sw��W�Ϋ�rjl�ާ :<�EO�r�iC�NQ�V6��{֊DW~^���O	���d��3�._�u�ysLk/�$�b��k����*B1T��������ޮJoְ8�X�z�\��0_��ī;,FU�&Mh&ÿيLB^��B��VD�4qk�  lux����]=�2���Ɉh:MF'I�:����FE&�O�������,Z�`���Y��}&P�W
��$S�N-�қ��6t:I�q�'�yH%J�xڴ!X���Js����MЪ�"�
;Po8���j1]f�������Lq"�����@�Y�v?�V�>֕6}��Jy���ހ^���kR&P�I�n_8��wp�S���б���'���	�.Fp�XƐ�0�� �� #q@Md�6�z��҃}���b�h��[����ocF@-L�l�.A �[��*�l�R2h=��16J����\���M�q�D4� lb&��"��w�C{>Q��7��!�a#{���7�L)����TO��Kb��>F35�]GE}d?�g{���K�Qg�������⏂zwq/��Y ���Ub�_�
�ۓ|��)[�i����qp��g�t� /�{+.��St�㭇�h� �����!qM�[��#��k*�H@Y	�
����_?��P���CJI�ƃg���áZ��>j
+�I���fw{���xU�G�Q�02m��\Q o�ȣݩ�\�1&��[!�Mݝ�A�a����`ּ��+��!<@��|���jS,Eh@.j~��%��w��*H�4�B֐w �Y�XPy|{�|́�%��Qƨ�A6���>S�h��#�(��}�y�B4FO�p�{'�J������F;o]g��j0�<U�`,/�Z5�K�j�{;�N+��k��q?��h����������ؼ�;�?}	�����!�k�%�~/{���K,Ţ�Q�G�a�%��A]�ޕy?��j�x)���B!4�n��6�
�*��Ee�ox=�N�ՐM�ιk\��߸gl�^R+�
-�
��6V���8��2m�`B�m���)�0���q�4�7k�V�-����[��p�8V��6+�"d��NL�!��x�Gƌntu�G��oO���Q�o���i�DIÛ���6�����g�{�U$��`+"^g���1�1��D�2�M��7٭l`��1茧JP��8�J������$�d'����nB�J%[I�V�QȄQgJ\��� z@3���ϔ�ܓ��*X?d�)W�B�Ȁ���Ң�{��r�V;��E����ܕ��1s�`��K������l� 7=�xV. �O��Q���k�#�7�N��ݩ���~I����/�'�~*�[I1�D�m��� =��͵ҭ���8g"S���3v֐�W��`���}�v� ֪*��K�[B��nI�o���23�m�z;��v夰+�[����P�����m@-i��&�%�%(&��vLط�.�tt�ơ�`_��F�`��`;Y�)d��̓�K(�!�d�4��
l�8�5��zH��O���ElA�aj��R��6�֋M�|��v�?h�2��lBѸ���a�T�j��cӔ6��H#\��p{ �sB��0�N�Ϫs��a�DC�0��\��=h�g�Yt���������8x����>WX����!�0��۝{Xn@���z�v�W?���I�ҝ��>�h;A�ge�#�[���W^�����ŕP������#|q��wt��o=�o�\O�+߃��f9��KH�F�����l
~�!�F�����#;���T,,A�BqE���ǈ�s10��D��{��U�DtnTs���f�]�_�t%n�{��g��Fɚ�j&����N�?�1|���U��p�"���#<�;�\���2y��E��F!&S9��5o�� ��}���ln�rB��
Թ�׶�|��"��΀��x'��w �e�^�b����O�� /Up����o�����ю\c
o�|���+Ș��0�r�wU�5�u�0@'#��5ϛ��W�(>�9��Z,!~�w�5��
�T��M�ľ�Oپ�/��ײ:�����?������yٱVi!����+&�Uq��������5�c)`3�v�̦�s\��X��^�h͓��:��T�_mo|A�N� VB�v��4��Y6G}�}t��T���x2bv2B�~_�)M#�~!]��tBH�,�q�v
�7��v��},�)�Nc%�}�� �3�a��X	����4�6M�&%?�N���OM��w�5�K�7�1|����s09����7����T��"~�0�E~��ܓ�M;�֜�H�4U��L�7DknH�X0��S�J
�}���	��qie�@�I�9�@M�`�)�_ON���ѥ=�HL�����q7�T\U@!]�]�Pϴ^B������I�Y�򌶤�DM�U �����-�y������_�|H��I�I�I�O�iș�;�C�[4�%J���;��y��8�q/�^�12S��4ϐ��?�Sa�IK������9$��pA}[A�k `oX'�/oOEUH!٥�O�/����n$��1e�����GI[n�P�zxrv���t`-4��ނ�m'��5\z�@�6��-|�4�����rb���X�n�����0y���Q��L��g�jY	��^�k1D���c��̷*O���.�0���������y�������=Z�6��.�ܡ��Ρg�R�7��d��h�>�g|�:J�)=q+c�{IO�������B�2^�O!��Z핼�%�;�S	iL�Ý����P����Z?�h��VX��в��܀�ֱ
�Wf	�t^:S�B;b-�R���ao�%�5ϲ�)�\5�уQ��~5���>�c;�H	�����$�o������k�,���r���`F�l+Ao�|Gm�EwJ���24����q9�J"s�l�m;�O��,V�z��T����M����2��J6��'�>
�Z�n���:*׋8�wҡ>J���u��MC�����K*���#u���`�X%��@���9#���Z��t��=�*�[>	���� �@���pi�3SPg����,�������0R9�j�dґT�RM؞n�$DK$DF�X�L��7��?�ٍ`�D9�T
QH�QHK�\���(�>�����څ�$�SLIoq�G�"%�VH��A�˳V+ eU���'���b5O�lq �r��P��N��ͪC���Uu
Z�OV-u�7���$��8��Wƴ7m�t��d�PP��뗍H����r͐�p�E�e�,
-Zy�o��������˛��zwf��6����4z�td�=�5���F�M���-@L1���;�	݊���^{!���>��A�s}��č><uc��\B��.o��>"vk%!�0B�f4�;K�@��wX�6��#�NR�!�{��ކ��̡4<�8�Ԃx��WEҋȜY8Ss�,q��:Ty-�A��v���j��� ��(d�eC����J��b���2��Zm���*'eZF�������c���yݒ{�oNQO��0[�沤�J�Ъ=�}�+{�{Pͮ��a��k���F��.㮶��� K���ض���I``�AQe%�N�b�Ȃ����3xC�3��}<����'�"[L2p�S���v�v�pC	th8\~��V�D�qW��&���U�,֯�����-�k4�O��}�w�g&�"����!pWcYmm�t�L�ݹ��p����P~�؊�	ܫ/� ~��m�p��������0vkHŦ�+����XL�d"tJĳٍ=B��ٽv,�� �y��J�����~�i���F`�.%%!�}�5�ǟ&��tlE����$��7�
W��y!���C    �SU��$������]>�@� _���5���5V�цN���Z�Ϻ�G�����ib��ir2��������*֘.bb߄O�^La#
'���JG�o�[�q5V�J����-�v�=�G5��@Y�P�,p��1r���#�q�qm�a�sx��.{i}��(MfC�����Ca�����j�T儍�u�hRL[�&6�<��9m�D���wHoS��@$��P+v���0��iC\~�A������hw ���-���3��:y8�)F@bR��f�����X�l�SD��M��DQ��K6*���c2�6�7�k#x�@QHj/���� ��7e8�>-ͻ�4
o\�.W߈�j�O��^�� ���^V����Gkx�@������K�糽�|����fQ\j
��7��&Ӄ���2?��{�b_��}#T^y����+���.ԃ)F�;�93�����\�/뾝!]�V����ۗ��<�a|5�[HO���>p��Wjar$��S�ڎ�9.��6����;�Ge��R��[K ���aN���
�5t$5��̩>�~N�^6˦	ON�o7��ܓ[�Z�r��W��_xR�Ne�(���DN�|E�FZ	g�Aa��C�]
��Y�ު���Qd��Ɗi�	����s��5�9`�knk�ц���Y�i{$���?���c�4�<��N�Mϐ�1͝�c�b�	Rj#�^�.H���g?�Dܛ4�W��h�#�T��5��nf�T���
���lQL�!pӿ�9�����+j�*`e=��2��(�x*�$`e�X����Ǎ�y@ec҅!.��E�*���CkO���� �=h�,1�;kC��I9�aυ=Wl�W}5���3g�V�R�{����t��,�{X:�!���N2����*��9ӗb2��Qp����	M�$�X�}�4�=�1�C�����Q�	�%S1qK�������aDg�}����e2tl��Ûw�8��rD�-���Nv�f�P���&�tv��O����6��7;&
a�ӓ#����}¹��� .�ܢq��:<�5�,qu������u@�7 �E��3[W��ȼ�?�J<�A�(�g�h&R���z��V��Yb_�����i4>�&=#jR�Â/R�h��|�ŭ���5R�����ķ����Z!4�6@�F�������q�S��!.�N�� �t`���u�=�ZGS���!��:�݇���0R�#�3�}��m�;�j�rS&u��w8- �X:�M��Ł��	�f_�ۭz�����%���`���m�5�͍��TK&�XW:( �`�-��Q0��X˵�#�VrJǹ汆�n!�$�m�IJG>����&K�����N������*��#��R;6ҷO]�-�o���x)��q`���tk�a�ʳ[�pڒ�S��G��L�O������f�GJ;����;
Im�x ī�2 �Z��Le��J�3��ӆ@![� Aq�������r���͌�5a��2�눰͌v�2��E�}_k�	��ɜ�/���n_
 �Z-�s��SE7���L�IAT�
F�^��lƮ��zʿ�������27���M}O3:;�@򖝎�`0:�T9t(UP�^��M{v�v�G�����)�G��j�� j&�ؽs�_����5��h��N�D�>}���{��&�E�����Z��&P7�����@���04�C�f�׻w3��&B��v�H��h��pi���=�wN�� ������.f5���a�`�����O�0�>~x��f42Sh�ص�{/2f4�?��-sZBrC�I�H����Zj�?��,;�H�����߾RKH��I�tD]Ū�`H���tD^�8�����"���H��pׅrI�bC���2P�j�Qp���)���l1����	Y�"�t�zZ�q<�)VR����sҨA��$]+�EA�Nz���ı7S�"h�"H#�S�!�kר�F���Ƀ����aj������N�#�#�h�-��B���JqU]�U�1m}��)��'���鐴���ٔ� �Y��>���`��a�=� Fq�~��P<���R|�l�9ܼW�M�r-����L5��Fg6�t�]D&��{�mR��a�������PQf{��'dv$w�~,~�M�C�������f��A���T�is����e"���2цp�x�M�C��үTS�a��+�Qx�r���?�uc�Ŧ�@L��6����p-�I�\b������2�]x��Ck�F�+)x�
�R��� w>�}����	�ӆp�-�:ꜗ�<�*G>�W�x��y_��%�fMX�~�eư�����m~�k�6��:�&�D�uu�_i�G]_���~�
�g::Y���78f��A�3t����-Z$��69���D�Q�֨�� �q��K���SHҊ[�bjsTA�Sh}�0i�0�����",���{��WI.��:I��=�(�b�	c��:��k}S�J����;�7Y9U�����u�'�-}�qO� �0̏/�3��q!qs܏������"0}���@��ŵ#�s,r���BÍ���ԉ�+ ��`�U�|;U�yW�5hr�]5�Ǔ�`�Qr�b2
��5�Tn�T����#?*m�SA�ʯo����Pl\��X�G=��d2n����C�?��9^� ��X�.��M�~L:�"t�������Ϙ��.�ԁ��x��7+��~)�K��/Yu�%�_��h�7FD� ���x��JIㆭS��Tΐ�P�Nn����x���_>��T�%���:��N��- ,�CJp�rȧ�ŊB�}���s�}L��S�����W_;D�7F��t�j���d��K���0?��� �'<��U�X�.�e�n,�u �I4"�u��N��̿����!��t$����q�~fe�լ���8�Ȍ5ɵ!�H���x�}��F=��^ЌhaAʕy��Ph��0U�A��p|>��yWs��YJt��I��I����!5'o?5g�"�6�6�Kۅ��#��3y��L<��������P.�����:���	`Նp��5��G�/�ug�+�W:�W�m]�+Ԃ��DMH�6�2�,��f��
�ݛ��9����
�%6�	�Նpٗ"=|��Ga5��B'�{ӻv�p1?���F6u��!P(�Bjk���b�m�h��2��mj)�!<n��;���b�z�1K�A`IO�)�mx�-*G�`��DJI�wr�0�o����Mb%��6$��h+Φc)f�#���3����Xɲ���=l�I��9QS�W�l�&����6�*C�!���8!SѢ�0��D<x­z´C8A���>e�����󊲪����T�h�F=���ѷT6V�p-��r$���,Qj&�N@@ ���Nv7$m�*7{-�Ťipf)���4��i����-Я�Rq�ClS�T������ݹ�mBN2��6��g;��i�ט��״ Z-c�z�S2h�
�l��C ֑bM� �i* �hhl�&l�Қ=��]�Hh)�D$
 ѱ�Dv�p�.Q@E�Q��f�҂!�.Yh#*2lH'��/h�pѬ_��x�.�j%�J3�9l<��ǂ��!� 0�[�������F�y�p�����q��'��u@ ^��w{�����+��3q��s�(AIH���whz^m<���+\H{��dK���ܜ�i���{)e4��Ej����<�f���c_Zw��L�^!HR-�z�>�i�~cU�P⥧���1T�o�i�����c���;��ߊK���ˌF���s#Z��)�s�!�wyѨB9��ma j��F��p���F�ʵփ�+���pƯ5v����H8�W��F�	�g��#��R��aY�.�Wܴ�>f���eL5��5�<�W����$�%^||�.Q�G���)�Ŝ��f��-��҃�{�T��*���,�¤��^Q� �b��Ǒ����q�/�O�    {�g����\���wl�V�Y�����p����c���$���I_K��������
���uޮe��^�������Ӈ��~�WX���g�HwU����1����D-���@`cFcN���k�zHa�h�b���?�>b�41˔\Z�s`
kՏ������AO���6���np$
�b�%�9��o�DLH��*P(�֘�.��LgL��"�\`sٞ�$!V��?���3�ц�dơQ�:���b��UӬ�`3��K˞�xDFE��Ϲr�~�?0�0��o�.4�s���g�-�^h;0�[C�dp�yNq�:�������#[�!�u��c���8���{���#�p�!ԇ� ��÷Hwu�����KjC���嗶��oO���S�5 ����*��neǭ���1�it+R�,t<|y5����{�����|y�U˰�y�//8_	��)��p8V#�yV�Wi�/��xU8��ke W���[����(V�ݵO�q��qD�M�Ɩe���4�zvg|@�5(?>�W�?\ԀTtڞ]����V��غԵIw1�ES.������@7O�E�4.y�8�@P�z�5]�9��:vΓ>v��N|�9���$�I=��l�����} JqΧR�"�������˴+�:~d�t(����%M����x��w�i廊T�d��K������7~��K���%RJ��g��ϱs�������bQ��	0qoxb�5!�Mk�ؚ�^,�<�X���eb�>����n�I�}iq���%����l����1��Cc�揺���]���ul0�)�����C՞R����"b��e���/AW���a��:�3�<p�����&#^����2�:�k��JsCT��m����C�4�(���O2�l�,�כ�V]�Z�|!���	�hu��U5�J�^+&��`�L��B0QO��b�b�!ԇ��/'�(�	B�tW5"uLd������D*�Am�K\:����5g/�*MÊ>C
�V`���#3����r��#5����p�Ϸl�����Dc���!\��Ӌ�J�$��-�LQ0��\,�!<�`"���p1�T�LL�q�9Vkhp3*H&�)a�4�L�?� ڦU&��2�2���N�Ȍ�NBɻ�|!2!Df�!2c��!���Y��"c'>�n�\!2!Df!2��c��V&!x�
ް�{������=���1"m�4L�ST+*6o<���12C�Iv2I]��� �V��\���K�G��c%�8W,�\�PP��$�<3����H��@{�;�ށ�^���Ӡ�x���w]�á�i�M�k��z=һ3�;�1�$RK�G��
.]0�\��P�[�	��%��E�a��s���nꖙ�GD�'WFqgX&�?�=�-h�97��YC�a���v�$� ���L�>��OO�(�d�Doݵ�O/'�.=p�-s�v�ٹ^±s�	��J|�IށK\����!�	�$�{8uγ?~�;�a�D���{_��uo���1Z��:L[F��ti<��G`�4��L&��EUhg�!�N��Jet�r����.>p�=��'4
;I�>�θ>.~B#%��Hwyʁ���(�$UK�]/�u�����d�9�tsG_�0L� ���@9��pK٦�����$SK�z�r(�	+Lfj����
����fp�\������'D�-Xh#,�z`m�K,���o����f#�A��B�[&=Q���T�����O���m������/���|�)�5�����+�gP�����O��ҙ�+J�ª���Nyl�ĵp��6����5x��ݨ��gמ}^CvK�!����v��$�șDjo�YS�d�����I��ZS�\�]s1����-Y�2��A�Li<z:�I��;z��]�~������jj�ߐ���^�Bf�M8��$�$t'��I-hC�:L��$���)���jC(��Z����Yl��*x����L+[Z+p�*�m�"�����ڍd�-���-l|���J����0�p�����]�+�K�ߕ�/�2O����&����<��ʳ�^/>t�(nЀ�����`gt�U.�-R`:����Ua�Xn�|�z�ۺ�<U�2y�	2���
e�?.lxA�Vmx�����A�-��]Y��d|�����x����	7ֆP+v?t�gxv��v��K2^��7���v�An���A����2�|��� [(ъ÷�����DTh�m�%�G�;�C(K��oD��/��� ��l�^3�`);�J´A���\B�3R�ma������h'y�V�-��K,�τ�����w��|+6憍��|`�'�~�A�\[EB���X*s\dv(>�u`N1�{a
�Bx�<�C$��k������(��kp�_P�j_#'��8�p@m�x�oK��k���+)���/������I�'��Z�`�D�^�?Ȥ��Ps-�"T�B�
		ٙB�!�M�C�X#mCG���߿�[�ٱdrE4>Ej�:�$��� �  �@�҇iw�&^�^�1H8�K{dE ���#��52g�����N�vl��݊JD�3U�(/~p��(z����h�/J����zl�}Qs,�`���W�4��ϱ�`����d��&3&��k�q4��HD�Z?/OQ���S�5��|��k��נ��h�4���I#�N�I慯.�p�������X-��g-����(���*�~��'#6����I*�fX8Y�+��<Q��}��lU�͢R��-5�iA���"&�Pc[m�]�c�y5�g�<.���ժ}�#�;���0�����ֱ�}�y���_��z���1s��ǂ���j���	L��]���W�"�������**6�c���bo��Pk��.,�^�e1e�Y���RQ��nsL���s������3����R�OpS0��Z�_��樂��nW����M�״!X�YO��za�m��O�m?�n²�Z�1YF�!��7�%�����<��������5�RcҐV�U����Y���	P��(+�_�������/��#�7�i@�pR���0q�����P�X��{�����X������5���,-�3����\������ {~X�YC0x)uA�w��4 �� .�����4���/�y�[�#- d��%E��qaT�Iu�*�����x�Sb���X�Ve��r��^Ê���{o�� ���o�c��<�7}���k�hˡSʆ):zi�����[
�p��4�#��f%�lVr)���h�N� N��9�\�𱩒�Y����ƃdzE�v��x�Kʾ�)�3V5:��vL�9���ck6�U�^����`L����N��I9�a�����c�>bQ`��׮��
#҅���X�3��o��߯������j ���[�0�L��P������C!\��&y�m١3�\�P=]�%���|W<�(`�
�������tn|��0�6
rB���Y�H����i���6
Baȫ�rZN=�@N�@|���-�Q�F�������Z��,����ş�`�.A�ro��nAB���D���rl��� ��zV��[T^��M>�p �i�	P�V�Brs�*�g/5�E��aF}x�5���UmA�Fb�EB0�m�Z�&�r�́sЛ]�Y���=��?�h r�6���ݘF��%�\c��ߵ�}����YX�C?a�����01-�vi�w4(��ܐK�_~���6��/���˳���� ��1$�<�z
�\����� �&m��/�����{a��-D:��ុJa^ۚc_�a�0���ZZL�as�yU1��ghT�U�n4P�eǅ�Tȟ�p*w�[����ǀ$Aѓ@�
� l�5E���j��J����g�]��o�"nXU�2����x������3�+a�w����\@�����]��;�q�Aw��� ��V	��s0J��MZ�J����g����_]�ES��ql�YQ��%�(O���ya�J�M�+�Vށ}������� ,  ����8����?��?���O�Ͽ�?������;��Ƙ&7Ʃڑ���+���X	&]��4f��xG���q�q�&�=H&�f�^����L�*�Y�	e�Y�������
��}ؼ>�t��x�^��]� ���w"��R�Լ��s(���H�#��v �����H0-d�"����*��]э7��Bǈ���%g�
�q+\&�����pa�vߢf���Иd�Eqt��7p�ڀ�$�M������Ă�p�ﳌ�k��Fi��u��Hk���?���!�������E+1,*&	�_<���b �ٷ z)���/��i��KÓ��^�J�O	��m�u�/ƄrLhd5��:��i��EC�����K������fW`'��:�Q�լ�۲�*:�/,���Y�5�V�>/u����ik�\B`.֥2uh kd���T�[^�9����熨_�cy������B������4����M�sQ��z"������0�Z�dEr�gPy����-�G�w���(ɻ��r��=|!2�s�Uk�c�m皬U��A w���b	u|F)���]�v�-ZHQ��k��'#�^�V�%Y~}�]�U�I�ꟻ�w>I�[�]��*�	s#|��$��T��#UG��E����(�y�0���h���4�I���A��X3�K�,`���H��+�j���w���(�߼p������\��O��(2+P���͐���f�&!�	tf)�4��oph�"�ڢȠ(��v���s�ۊX(���R%y9�B_1��y�E�T����S�&������d��
S�T�"��d���;���n��R�D�W��S�b=/���",T~�Ђ�"��Af��)3�~�,84Q���	� �� GA� �,�c��q�%\�Lh+��)_+~��#_F:GNT!��VQ����C�[�����Vߪ����Ą�@'�KrXyi�S
��l��A��S۠ =��'4�1�=�ze�>4m��{����9B�qB��DMґ-Λ�� -	��kX�A�Az�o��V��v��p��JN̛�cGRǘ�^a�4MN���Ӈ���p��a�t�U� �V>�נ�I^�杋���U���b��3�>E�����C�Y�k ��
c��,c	�O��1�W����@rH���7|4��_�w������B�1���e�T����~	PU�����:ЇP6;��xf�_�/�s@�Vɿ�JW��5X}�L=�0�ˠ���j����Ͽ��Xپ��>�bp�f�dśd���6b*����WM�f����4���8==����      b      x��}�n$G����)}�����K}(�3��ԡS��4�9L?@��ZF5%墒:w��t�DR����|�+̓̿���{�n�� �Ж��l��7S�R�+3���홬�׼mΚ7s��ys|q�Y^|ڜ4��)����l~�Y�
>��?\�>�)��Y�9����ۼ����~k	�wr�բ9����@<�O�q�g���u���Ϛ�O�#�o�k�ȫ���yu���y��r���YC��L噂�du����_�7��s����7oc�4��_��p"?�W���hLêdX��UdU��g�<k~��y��i��>KX�\eBu�05�5n^6g~�f?�j=N Uˠj�V��Ef3���9�U��������9�m���w �dN�>��
���4�Z���ĻWe.SU�DX��vܼ��r^�;��q%i	i����������7�~�-��zN���h����wͣ�-��<���`�a�u���.b�A:O��68�w��s�a���t�Ё<���y�|��'̠�gP�T8��E��J�Sd�}7���P"��~|«�x&��\Ih�h��8�y|嗥:s`kb����ãI,\��͏	(EF�A�h�Y#ȯA����,@��N/�l��G�n�>�=�$4��̆������8�����|��H��)x�0�R�Q���ruJ=iO7Y�:�gt���q�ILm��	L͋B�W:�<��0�����ֹ(��Ԟj�
O�9֗WjO�M+Q&2��h4���О� �����ɜ�xNKx8"��JNK7�D��$Vh�p��}fG�3���0��i�%=���s�x���~g��_�����S�_����'3�^��Z��.VN��/C�����i�yC�q�����w���'o�����=d^���x�?O���
窆�@�k����(�"؁�?y�B�H{�5%.�)-GľG��57���)}ˁ�@��0�,^ukG�d�T���Z}���⏸L�I��a4d۽%n9�5�)�7�s_7��g	��C��XE���ŝ�#`��"�W���Ϳ������r���E�b��N�1�7���s����cd8�e�.�-�7n?�����}�0�,3�4ӠI5���W��%Jl<�c��-QQ�/��8�_|2|���F>�D<�Y`7L���7�$|#�KB☤�������h��X%��?�}MP�F>�D�:>`[[��uF3YU��L��pozL+["�,A0�K]��5t���e)�f���m�mN����"X��K��l~�����)a�!&̂���I��D�������OP�2g;�`���0,��޼����H ��حm�����V�y�H�:�I�w��S�Rd�� "j�$M��G�@�)[D0�����ZO��u��������	u��&��x��8��t��3�)<jo�W�%-T!�(<���ZE�ݯ��m��t�г�?���s��t�՘� Nf � -��谍�
�b�Q�|+���H�)���L��D���Lf������B�"��)���]J�B�"�С�23����ğ�����>�h~�?�TXg�r
���H�� ���0������l%#�>��n9`��Y9��P�.-&u8�To��7A!sl����,�f�^8�wٲb�?�4�㐭"!t����y>*�	�Kپ&R���z�d�K�v�`6A>�D��l�Y}s�W)��`N�dkz��w��ޯ��~�I��4������2=*Y��6��$[�G�ʰ���J>�E)G�����5�a��ب7�9�lU��5����0p�$�<[�����U�?"��2Ƈ��˕k�kt��[�J��U�%M{T�UbY}�7�3��u�	�@.<�?~����"9K�Q�f#k�TK������;���	"��{�^�6����2��uIm��JԛN����z����,\�)��E���} x
Ar-aq���^���K~H1�j�#��c3(U����8�sf���.�ԫeN�k��RP�]�t7r,�I(`UV��4������ �5����>E��Ű�E�`)�&T�$/���Xd��[.� �S�3��$L"8��������ZA�����A����]��tu�U�Ob�&m&�>R��9�_�[��9�J]V�y�GW]�s��p<[���;pǑ�į�'�c:�g����Qv�g鄇>%d	\���q�£5��7J�Ϙ�G�uѻ��%�q"͔��Iqs�+F�������d�E�*|��K�2�~Fڢ!��i�ɓ��<J@$*5&!"r3.�z)۵>��9R���v�C�7ڴ[�8�L�{Ř�;R��c��z���QJ´�k�Ȱ�� �B@��ɜ�� �W�U�$�'�s@e�������tg��,�:��C�ԯ��p/�*���L�Q-��$g�Ym;2O��+�x�\j�I`}u�Ծ��)#��>O��2��v!�*�;@q���5��-J�B@ǁeu=�,��a��׶��@�E������6����Ue�(���t�v�'�j�S�^�-�ͅ������8��$>v� u=AZ�(�v�E�.�W���
-��;�p���)�g���)����ܧ{s�6Y�x��%��9���,��h:<km���v潉�tW�g)Z@�$2���LY�)���c/���{�ٍ�[��F�#2��L�K�rYM pB�i�&@�����	��Y���5j����Z��� �?���R�!.-��z�7����(}���a�����U���\��,�"�xCD(v\�V�:���׼��*�c_�7|o�R�%ȽU�v2	'E��u�v��[��(�0��tw��W�-N���Q1٨/����Ck��I
�d815A��aU&!4�R� y�^���]��#/���8j�9�����a�bҏ^qA�W�2ɣ��?�K_������ޒZ\R{)px�Z������Gx��*�:��/��=�P>�U8����5e�Dbe8Z����9Ec�%�@�?X����o���:�y�}�Z��U��`�%J��������	@�K��L�r���B����V/�+X����d�H�O���hR
Z�25>dj(�/�k��GUM�,�&���w	Hdk���6�#�.Z�]yj丢�qE�\�c��槞��̘cB�_ƔOR]��Ԙ���{�����s}knR��V�+�\u�����c
�~�Y��C�x��Szq�L�f��Wcbf,��,h(s�AB���aF&��4�'ȵ��]I`�uu�<��ie�	�y��'�T�jH!����*m����qJ&y��R���#����8��m�� 1�f��O��}aT�0�zmŜ�K��C��B���-�#��W^d���XF�ⅰr���뿍,q�W�sJ�_oф�K�Հ炳��/[����,�=���42YB�D��j���d���iB���#�V�nd��(��`����Yg�e�9�����sH��a-t��A.���O�V��Zes�j_�uny�1�t�(P� 9��س�A �9N�r�M����q��.>�viU�O\�Իu:�ז��f�3�sW�����'y����:��
�iI"�)3E^�Դ\���O�e�)�AV�Zm��n�j�
e΋�E�2T�0ӟ�4����.�c:���q^�[��ԯ+��6�����l��6�A���f�	�yX�/�J��RD���`W��G�7�6XI�&�s�� ļ�+e�G]8t1�&���rq��Ahh�̄�.��H���L���q��EN{�Fu���49s��v�R��t�gI	�V��[ؗsN��`��dqQ�V�cP��$��'%�Z9�nM�/�$V�W8�A�(6�Ʋ�������R�����s�aF�\��$ �Ԧ4h�=4�&s�������ik���Le.�������n���"4�}��>����_��x��<���	e�����|\�+G(+*k#�ZA��~����1��.ue=d���+�LEP�"��V�&[��'�|]�F��'!r6�C�zd�ĩ��{'K5��F1br��۱��    7�z��K�'�\�Iw�: ���g�8�hC��`Vɷ��UH�m7�E�n�)�.�$Xgh5��0#��e�h��n7���X���|2�2�w�#=bE|�*"��:���:��Ȯed�qT����5���Ł��y`3�6�se���1y2����z�S��LE����'SEq��)7����s2u�B��ֈ�K���}gm���HL� @�'�m![�E�a��iu�z���YǡE~�]�o8B��0�UY�UYa�/�0+��&xe�+ͻ�;��w[�v����Y��Y^��	���> �"x��g�-����wOy������엜�b}~JbO���+���p�lu�lurs-`�Am�HAnZ��39���\m���1�<�\s���nN�'[�R����(�Bqm�f�#gX���y�p��VN�>�t�N-�*��A�U��.,�
|i���In�%K��r�����z��t�2�T�w8v��[��b&���[�}�j'P�d�rwl[V�K
�����w>�m��|��u�	C�&�����
�;7/s��e�!�Lc�k6���6�n]S`U�����(
�a�]_�e�L��`��P�ݒf�� ���A[�WΤ�E���u��&O�<�b�����#����Y����#&��X���a'��1
W0�;�c��I���`R��2��%�: �	�}����v-�]A�'g�0	�P�����kqr�f��I��3)%s�R~R�6Dq��*V����$���*.�L��_AA��W��k������Dޜ�x�I8GG���娓�i�43�K�{Ul�9�N�G�_9�s��	U\z�sr�{&!~��a��ł( 8�+�I�Sk�6O>sH������QRA��Su�4���ܥ
�M?$]�0�w'Q�l�M��s?!�ɽ��ov��m,�o�,s8�W����AFn����UaV7�ᤓSj�������l�U��3g�ƅaI/��qwjvr��%|�99�I���PY|��]Niq6@߭�ܭn�;Z0	�P��$��׸v�_:����5i8�z�<c��Z�R���Etz�QeK�94*ޏ�m��V>���I� n��e��tL�Y�RP���<&��J_w��ʼYf�����%��~J��������+�{5��v�����-�n�5uus"DN~O�������H�o��u�,���Y�$�kl�:F��������~�h�]�mur��f` Q�-vB>|�&Q"Kh�� O��z��Yi¬n�EE~=�I3l�Ƴ�A9�I3lFǳ�95��¤�sl�>޳Ic�餛�n%NN$q��l_�(��$�� �$�U�P�C%sV8�1��� �$"�\�1�N%�o0	1P ��w�i���4s��Vaj�o�������7�8�������?������W��;��䠲#��y��	�b�۶3�/2�Ԟ_=�k���IL�9~�+Ro�8��1�4s%�<t~s��N~Y�I��U7�:%�Na�w	�	�ߠH�ܜ�I3[�_C��51�hJp��������4�i4/�6%�+�����rFv�|�k���I�E.
(&!VL像l�^��q�*�	O ��BN�`N�.�Zm��0�T(�&!~5I��u�B��`�L��V7�RTȩL�Y�O_
�y����a�U�#�(�)��?�(z{�3o���9� ��U�4��O�v�׶�XN3aΠ�e�Dfx:ə$L�Q�6���v�D�I���.=(��0	!�zQ;s�r�&�46!U�xd���BN�`���O_ם��;�0	1R���7H���L�Yy�������G91�I3��Z�S���B���f�$�X�-�w*��&!|�X�y�
�y&ͬc��w��*���LB�~����˼u�<��'���Sn�b�xs�ܭ����|F���ss"r}n�or�k�{f�g4��ۀ/i��p�Al���c�%t/*����� $g�<��Zr&�k���ӃgзU�\ȹ-Lb�f�A�߼���:���2s������\�`2�i�n*LB$$���d�|�v�";�H����o�!�����SM�]�9-L��ڷwՃr��8�g��>��Å�S��jOs��[s�qZS�BNkaa�	��3�k!���
��''\e �g̓�)��/ 6ƥ�$�Z��n����]Ko�ؒ�딖�Yȉ'L��M �T 2�q��I��}�{��6XA��&�N�,�b �n	0s(
7��*��M�����I��l�zGO퍧�
��!�ah<���x{ʹy�	,"��ä�O�T���9Z>������]}�ku�5vH10��a�T�k����V�0OɐZ2y%e�P�P0�Z�wc
M��ޙ�������I���}Z����ն�J{����}�Dۥy<u�ɘ����$�G���	�R*2-�V��#�z�\��z�oI�±�7t/{Im}g6��fD-�C[N��Sdwu��ƹ�%���d��/5�u��U*�g����*��b�\�M��a��y-)BT3�)����L<_��6ς>L	�����s?��	��
��1y������4��hI��^?�̢}��% 0��uG{X�U�O��k������-e�r�v+�ǼH(�p2�>p��pǧ��Df�����E�N�!���$Tr'�<*zGO7$���Z�I8+j
��Y��C>d�����&/�U��
s8:"��kC�Ca�D�sU�A�'<
���;�&�m���R�(���^#k��U���{�}�#$� �A��K�w.��Q�߯<��
o�h�Ƒ�^�>�A6���]+��d�N�;�����:\N�i`�gu9��O���j%��h�#u5���x���̫����H��M>�Q�ѫ,��^f�n�4��4FF�uՍ��ߌW��a�_�<��!k�]�À����٥�W�g�v� S�)�:�h����?�Y�}�!y��{��K�E�g�N�����������̔H|����Q;zVg÷t�x	cR|2��Z)O�В3�o�,P�p�%y����z
d�I�?0��q�3\��2و�*��T9hM˽j��4���WR[�Ѹs�%œU0Yw�'+�jm1��Ί����'�:�c.�n��n����2����]X'k��z�g��A��ՌD!:I���Ϥ#�L��z�s�œ=i`Y�V�k�#�'�z�zO�FV��4�-0[�	%�j�c��U��X�Yz_���,Z�c��,��f��V��V��w�8,�а\M$a%�jE��Jڕ-86��vV�o���-Fhd�t�'k2&���j�cش���r-���j|8�J����=^�Ӷpq�߄Rd>��s_P�yw��[�%Ek��Y?̵��T�o�őeF���(@�/�W���s�ݛLJ?�C��w W�})�<��j�g)�4�l�s���K�ر<��G��~�	ta�~v�9y����5�:��/à���i�`Q(�_�e��>�BY~Kb0�O��݆��w(���&��mI���}��J��+�������O'��XU�LG6(w*�N���/�F'haY�Ug��ۭ���_<i����px9���}�ߘ	�`$'��kld6��᎐&�Y�&�*;� ��of��.؉6��@K����a��XjكQ��( �-��z=����������O�>��t�M���F�q��d]���B
Px{��($�E�`��쮋�0��o������eA�Bh�ߒHH����xb�{x�E����q���t��-�a�ഗ���$���6�ܒ�48�	L���SL
��p����$��]�J�8O�B�$l��\����8]1�ҽM�W�(Xt�,���J	�B�tK�H�Oo�������aҹ����o�~X*�%���}��su�̦���@!��L"��.����3�kY�IL�
�#�)��Ö쎣`,�a0���N�KY1��밡1�F�'tq��m{:餖�3�4���P`ݨѐ�j����y:�*:�%�N�`p{7\W<�	��8k��YzN!�逌�q(PbT*�ȴ�Ʋ.S�QB���Ҵ�_]�{�rоK�)�o|���LF�<2���p(��|{{M2@�q����    �h�]��`�W"Y��6�/}��E���w�w��W����H-g\�:� _�.So�Z��ɇ'�n�j���
��	���}�{��21��0{�T�.T��j꼢�C{�̱1�=H�^r^FmCr��p�rJ�)K�)�r�Em��#/��)u�]�L}�56,��1�𓤺%j9�����R�딯��_E�-���	���;��]˹�mّ�~\���75��e�������WV6���B�K��4�<�h��¨UH�<!rH�ݟRn�2�V��@'�B����h)P2�>$�:��4��j7�ķi�q� �WR����(��g�%�"�s�� 8H���� L�`*Am�^��g���]t�l�)¥����� ���
$= �,������������;'���B��W�����oA�d��]g95�e��4����z	��b����:�����͛m<�&mB�����l\��S��%��h݊H���l5k4��8&���#���4�كɺ����Eqy��Ȇ&���H�c���+��!*�J���r�I3�{N�ga���r`8�:���$��2��eL(C����ٯٓ�X��۳KD�v7k4�iR�������)	sj}[R4���*��&�C��&��3��E3���K�2�HcZBC]�z�t}\&s�=q�t\kE��e3g��I�%3LY�q�����e�qɰ:T@B�İ"bM���K�4傱�
�����{T;��	�9͡��a�J\�
o�i	����e�x�����*���k��wt�ʫPr�U(��}y4��=.g�0�`r)����U7�P���e���^�(=9ՁI3~s���w%I)���G�4������Wf�r��:T� �X�#
��ʾH�{�q]��iǷ������!*���1���CԳ�����M�z��uV��? �1����	�\�W��yj@J��P�u���\r@��w>3��W��Rk�@"N)�
D[Q���`�DC�`d�#k����#�{��<oj<��:u�pR)�_��q%�u:~AvR��F�%�M:~�H�2G��J��t���
$�_�O���#3'�Q�B�@��b����9@"�@�g�u:�5#�,��dV�ˋa�6�@���5�������[�YN�,��p,NM���)jG4X r�����j\�0�`b{���6����h����;���f�P��]�z����AO��^���r��X�F��Ri!N>����ԈDo�$����Ͼ.c$�_��q3$&��t����T�|q��}I��3��a�C��у�΁���\c
��A�d y|`�V��従���*�C���� �'`�R��V�*R��/]6�)/�����,d���0�̃�tp08���fΛ�|Ӡ	��@�i�?#/�O뷝�pL@ev���+bꍩnȫb�\�D�I�����mNmD�� ������!�����G���s�*,�?GB�mXV���PX�iUI�HS�m�g�a׬RX&|�)3�ȫ.����:�w�<�IY�	��w:�!�w'�СU�Bk����m�>�1��V��he#�y�dY�f˙2�d�Cʗ$�,TRې]�<��2�+�}j�Q�mҳ4ƚr�����VL��io~��Y�v��-��Ɂ'Ȼp�$8iN��h�q"��)��{ԋ{�Q	�������eYh&ޒf�-mv��1$KLj�u�'����?��-�7n��!g��\������FV�����	@���]�v`x�O�ML�(��GU�� tLG�OBMCJi(�+�p~��潮�#����B���;G��� v��"�L�.���7�1`B�����Ϯ�b��͠]O`I����0>����M� ��h��6?	��E6� +5�����/�%		��e5�j��,��l!��^����']6�8I�{Ja�@�������K���3Ϲ�=�X���ȳ49R�Z�H3Uq��ԟ�Ǡnp�_�Z����>a�ow���>���������W�����y��h���01�_~���(d���}��C9�ū�aϾ���P)�X�]����������$z���ʇ{CvZ'r�0<�H�H��@�~]TWeՎ�p(Y���hl.n��:��W�Bm�;�-��T-g��&��<L(�� [
O��͛M��f���r�	X��� �H�m%��T��E�m�����սPnS8��ߩ�y��!Tr�[�@wŽ�-׷�L,)�Ť����K��5�Գ�STAL�`�����W2�NF��oL���p"�*o0Xʱ��2���U�ʣ X�V����A+��Y-,��J�!�.�\18bj4ҽ���H�Vx��ϓJ�̠��� �$����m��\�$s�,���F�Ճ��|�GA+˕�/H�sW��*���~��m�71�(����Z�;��<Ҩ5�fF�3=��U��҉���H��O��Y���A�WD�A>�l��ӕ|�1)L~�w>-���n$bL�F�Y�e��v3�R=�1���+40)͗�A�5zլW�<���!4:f� �m����F�o`D��@�l�Ӄ���H�C3���6���hL�E��g�W8n���#�*�f�r�%�Ԛ6��K>a�y0c�ሄ���t��y͉RA'���G�:@m�k���#X \
*��4��{�����9f�t��֡��>���CR�"w{�*��2#�6�T�C�JE��N5󣋺�I���b�V~�ǕyS��1�Dmg�sDhѽ/��V|������Ff����d�Te�^N���l��j��&�Em�$^�	�;����<��RO�#�J�).  ���~֣Y��"L>
�f7T���_g.�6�����%qs�����PX��:��h뢈4�+�?@��C(�)S2��d*{@2�s�$b����~G�<�f.�L�)�L�Ϧ��1٣��HD��x&Ox���,C���
��`N]�C�ƚ4-B�"�N谰�P��#�1'"Tt�U��t!�W$�|��Х-��k�g<o~L�cj#s�)41��z/S��XVY�j�#�A��Q^�WQD"heV���.��,�!�G� #���"aX�	)��1,G�#Ҍn���0��u�{SeF~<Y�s��UR����Q-Μ�/$�޶1��k�z�	�;�|�"�
�7�-��������A(���9.)=�6��Y��a{at�u���YM�0����1 J�,�>���y#�\:ո�ѣ���?��c��cZa���i�H�DQ"ז�^�����<NYPpfd4��:��?��a��*I�V*ʭH�x(����m���J�ڀ�W�ڑ�n��6߫V\��"c��W�%(�=ckɏ��U)���2���X(��E��a�5��Z}��O�)����� ޜ>�]%����|�����{�I�._�5�8�	(�mW�ٕ���ŹM��p<w���^��H��q���;_���0�75������/����.p`���ZP���=L���mU�Sz@j��ʿ�6l?O��?.ƈ・�66�Y�OH������z��k�^�b�H�7�	Z_�ZJK���B�?lI����Y�覔��!7t�wT
~�QY�Jt���y��/�\l��VB��pP"��5�S�B+��z�F�У�YUсv��F�7G�?R��s�qV+n�2��+,��)6�;Rq;��v�H��ȩl(+]�E����f>Y�g����C� l���+�75���E���-�y};7�]�gL}VHW���q��{˿U�ߡc�$�=��T���5%QZ�E���?��?�����/����W%��Y�}���R���lIX���Yt�}Y��k�!g���y�'��Ժ�7���[��ʿ����1auy��ɢ�/���Q��Y
�:vj=k^�_��bKgd��l ����ǧͷ�F�1��yQ��4/>ɋ���gՅ��B��-Ѣ�1�*��Dj�[zV�s����H�('�%����r�N��$F��*�;��'h�z�_�R���g�r"Ҁ�?m��j��8   �v�Ƽ?Z��m=2����!��|���C��Vrc�W���GuQ�|�����w��h_����=����j�O��=_���-L@շ�{0uu��v(���hd;0qu0=Xr�^��<"��i�U��\�=��5U�z9��O�l)b XZ��E��ၽ����=�H���Cw?)�rr�	%?�N�扶Cܾe �BE�#L�Z�Ec׻Ʈ�budz�U���갗��G��� 	j��̜O��w`k�*;��1i�۽�l��h(�      d   �  x��YYsW~F���<D�t��y2;b_*U�h��ٚ-5U��mʩ��͸�I<vj�afd�Jd[��B����!�8��)�%sO�m�w��ۇ��/e3�j�L?3�����<��B��~e�O�����<����L�L�����������/�5����v�y���_���6\|j��ޝ~f���^�M�#hzn3��gט�����C�!4�LoMo��zk,u�^�P7kҤ��U�&W�Dװ}��/P`��0���"i�|�B�y��wm��{$���!jK'�c�ۃ�i�F�O�P��32Eu��aֹW�PE�>I�>v��ñp*�t������?��O�n�S�x2� p��ق�\��"��$}�i�Y"l��	���x?����tf�����f>��c�j>1����c��<"������ӯ�&��3�?"��x�_���kl���$��@��R��<U24�����m(�t`@�G 1�WV�ŃI>�V����Fr������C��\�bhf�5D���E��� >�k//�S�x|�q�5��.W��F�!�1�������JZ,Zvz%�!�l2֧�����d�������0��lyl��-�]�bx a�U���c3��}����#tD���H�B��|�P�$�!n���E0�ܰ��`��A�!������g6����{p�Ď~��a�~����
�onw�Ϳ!�c��!#1A�dGѱ����l}�T4B��K��"��F�O�,�pW�)-d�9o�[��,{�\����܄���&ա@�!�o*��w�b����a�d�
R�<�!�ĥt���Lo�?A�|�$�;r���}ӻ��ђ6�d;Ͱ`�4$<g?�Z��\=J&
���W|�r8P��	���$m�a��d���u#�����`R����������_r�iLpCk4 ayf��D�	�9�d~��}ݦ���z�yv������c��f�^��}--	|��>���5�A^|�V_��%U���g�Jzr| m�&r�&w&s0����6�
m_��-U�ъ�?М	�SϏ��8��P;���%���D�X�hꢛ��7A����	��L�/Ɋ���*���5'��gvEQtp�C8v�l��	2y�����S�����l�*�f�ID�q���K��0$ට;�������
�,���P������׈d[�d����X�K����KZ�{�J'���������^-mL�U-/y@��(�qN���;H�.x���XZL+Xr(�_�솱<�q�R?��2'J[O�I�?��Z��z���[����FP)z�c�C`�yr���F��$��l])&ӑq+Z����s���7�*��׵��zZ<�T�� B6�j1��ʣ����	��E2Gp�,ΰ@^�3z��A(U����Pu2"�J��HD$'��-��y��P�����&�s��|�qj��t6��I�B �$-�$�5z��	ubz�4��Z��4!7"(0�G:D����BC��_�B�Ώ)��*Fe|P�K0556�T�*0rZ��$����;o]h-a�\ (n�K�
~"�i�]��P���'\\#���-)J��Ƽ�i	A��yN�v�'�"4�=r��q'Hu�a��"D9B�W�
���'��`���`�zP� �A]XVZ[rVi΅�����g�g�,�3��_`Dp-��o	�M8�r]�4��$BkmW��T��k��JhF*O(itP�!���LCU>YO<��'��Qj7�U�D���X-�\)��/<3��c���`�n^���2�o�g������)=���Fm+̙�TUc;ɖ7�a�J�q�=V���`G)W��t&���j��4�a*@F|%ge{��IEB�PKYM+��)*�n/��B"��NQb����N�p�!�۸y��w�)�Ά��Z��:ݐ��C���%�}�)�"q��G�\&�vo0���I:Sg4YT��0q&�F1�:�Q#�D�����w�H)�(�Wۻ�&�h���Q�f?�A�Z��G�݅[��U�;S\���V���g�c��p�`����r 
�z���e�����ǿ[�~���/r
o�8��\}��W�_V�Gt��T#��+\�Q��>Oڥ���ՑHU�B���N�8!u�L@�<�Q�u�(�Jl'��wg�l ���>�fR���?�p-�)�H�EB`,��d�������_R���$
����{/��n�4��ӻp��s���۶�Ԗ�й�E<3��.%6�4�޼VOf��_�B��&�4�r){�P��4b�AB�ֹb�
���E��7x�bڡ���/h��[�����Xlg�׷�U�L[�`]���-v�޵����U`�U��څ��>�����w�����b�=v/��ej������k��Y�յJ#��kv<�I�.��$Pp/�g5Y�P	��q�� |������sR��@�q��� ǫ�o�~�l�ɧ�u��k�.F���o
���7jֻ���t�yAa9	�F-w{���m=]�ʂ�؂30��\���}ެ�_$��t j�(�l���u��3v1�!�o�2���O���Z3�1��KG���CH����NM�cyx>�Xg�m=�*wǒFH�e�$���,��s|����@]s��q F\�WP��l:+I�?�3ш&�����.����P��([��P�O���!]Fֿ�e1�></�o��Q��1ofÂ���(P��I�.��/'%��1M)�)2�	�����AY���t�J��q}�_Ե8Q���.�Wx��I�j��*�(,.?���������T&��u���x|�l8�ǖ��T8�V�~�fEVut��5���/����ᰜ��=_:]�⣐�Lk�r��#�`� �R���2т��p�������Ń[M;;;;�ٺ�E     