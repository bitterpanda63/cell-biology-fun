
export interface AminoAcid {
    name: string;
    shortName: string;
    letter: string;
}

export class AsparticAcid implements AminoAcid {
    letter: string = "D";
    name: string = "Aspartic acid";
    shortName: string = "Asp";
}
export class GlutamicAcid implements AminoAcid {
    letter: string = "E";
    name: string = "Glutamic acid";
    shortName: string = "Glu";
}
export class Arginine implements AminoAcid {
    letter: string = "R";
    name: string = "Arginine";
    shortName: string = "Arg";
}
export class Lysine implements AminoAcid {
    letter: string = "K";
    name: string = "Lysine";
    shortName: string = "Lys";
}
export class Histidine implements AminoAcid {
    letter: string = "H";
    name: string = "Histidine";
    shortName: string = "His";
}
export class Asparagine implements AminoAcid {
    letter: string = "N";
    name: string = "Asparagine";
    shortName: string = "Asn";
}
export class Glutamine implements AminoAcid {
    letter: string = "Q";
    name: string = "Glutamine";
    shortName: string = "Gln";
}
export class Serine implements AminoAcid {
    letter: string = "S";
    name: string = "Serine";
    shortName: string = "Ser";
}

export class Threonine implements AminoAcid {
    letter: string = "T";
    name: string = "Threonine";
    shortName: string = "Thr";
}

export class Tyrosine implements AminoAcid {
    letter: string = "Y";
    name: string = "Tyrosine";
    shortName: string = "Tyr";
}

export class Alanine implements AminoAcid {
    letter: string = "A";
    name: string = "Alanine";
    shortName: string = "Ala";
}

export class Glycine implements AminoAcid {
    letter: string = "G";
    name: string = "Glycine";
    shortName: string = "Gly";
}

export class Valine implements AminoAcid {
    letter: string = "V";
    name: string = "Valine";
    shortName: string = "Val";
}

export class Leucine implements AminoAcid {
    letter: string = "L";
    name: string = "Leucine";
    shortName: string = "Leu";
}

export class Isoleucine implements AminoAcid {
    letter: string = "I";
    name: string = "Isoleucine";
    shortName: string = "Ile";
}

export class Proline implements AminoAcid {
    letter: string = "P";
    name: string = "Proline";
    shortName: string = "Pro";
}

export class Phenylalanine implements AminoAcid {
    letter: string = "F";
    name: string = "Phenylalanine";
    shortName: string = "Phe";
}

export class Methionine implements AminoAcid {
    letter: string = "M";
    name: string = "Methionine";
    shortName: string = "Met";
}

export class Tryptophan implements AminoAcid {
    letter: string = "W";
    name: string = "Tryptophan";
    shortName: string = "Trp";
}

export class Cysteine implements AminoAcid {
    letter: string = "C";
    name: string = "Cysteine";
    shortName: string = "Cys";
}
